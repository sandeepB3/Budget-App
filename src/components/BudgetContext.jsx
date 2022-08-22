//Context react hook used to pass essential data to all react components 

import React, {createContext, useContext, useState} from "react";
import {v4 as uuidV4} from "uuid";
import useLocalStorage from "./useLocalStorage";

const BudgetContext = createContext();

function useBudgets() {
    return useContext(BudgetContext);
}


// In Budgets array we store
// {
//     id:
//     name:
//     max value:
// }

// Expenses array store
// {
//     id:
//     budgetId:
//     Amt:
//     Description:
// }



function BudgetProvider({children}) {
    const [budgets, setBudgets] = useLocalStorage("budgets",[])  
    const [expenses, setExpenses] = useLocalStorage("expenses", [])

    function getBudgetExpenses(budgetId) {
        return expenses.filter( (expense) => expense.budgetId === budgetId)
    }

    function addExpense({descp, amt, budgetId}) {
        setExpenses((prevExpenses) =>{
            return [...prevExpenses, {id: uuidV4(), descp, amt, budgetId}]
        })
    }

    function addBudget({name, max}) {
        setBudgets((prevBudgets) =>{
            if (prevBudgets.find(budget => budget.name === name)){
                return prevBudgets
            }
            return [...prevBudgets, {id: uuidV4(), name, max}]
        })
    }

    function deleteBudget({id}) {
        // TODO: Deal with uncategorized expenses
        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id !== id);
        });
    }

    function deleteExpense({id}) {
        setExpenses(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id);
        });
    }




    <BudgetContext.Provider value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense,
    }}>
      {children}
    </BudgetContext.Provider>
}

export {useBudgets, BudgetProvider};
