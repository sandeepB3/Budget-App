import React from 'react'
import {Card, ProgressBar, Button, Stack} from 'react-bootstrap';
import currencyFormatter from './Format';

function progressColor(amt, mx) {
    const ratio = amt / mx
    if (ratio < 0.5) return "primary"
    if (ratio < 0.75) return "warning"
    return "danger"
}

function Budgetbox(props) {
    const classNames = []
    if (props.amount > props.max) {
      classNames.push("bg-danger", "bg-opacity-10")
    } 
    else if (props.gray) {
      classNames.push("bg-light")
    }

  return (
    <Card className={classNames.join(" ")} >
    <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2">{props.name}</div>
          <div className="d-flex align-items-baseline">
            {currencyFormatter.format(props.amount)}
              <span className="text-muted fs-6 ms-1">
                / {currencyFormatter.format(props.max)}
              </span>
          </div>
        </Card.Title>
        <ProgressBar className="rounded-pill" 
        variant={progressColor(props.amount, props.max) }
        min={0}
        max={props.max}
        now={props.amount}
        />
        <Stack direction="horizontal" gap="2" className="mt-4">
            <Button
            variant="outline-primary"
            className="ms-auto">
                Add Expense
            </Button>

            <Button variant="outline-secondary">
                View Expenses
            </Button>
        </Stack>
    </Card.Body>
    </Card>
  );
}

export default Budgetbox;