import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";

import { Formik, Form, Field } from "formik";
import { Button } from "mdbreact";
import { ReactstrapInput } from "reactstrap-formik";
import GetUsers from "../SelectUsers"; 

import { TaskSchema } from "../../../utils/validations/crateTask";

const EditTaskForm = props => (
  <Formik
    initialValues={{
      title: props.name,
      description: props.description,
      status: props.status,
      date: props.dueDate,
      estimatedTime: props.estimatedTime,
      assignedTo: props.assignedTo
    }}
    validationSchema={TaskSchema}
    onSubmit={props.submitForm}
  >
    {() => (
      <div className="card">
        <div className="card-body">
          <Form>
            <Field
              name="title"
              type="text"
              component={ReactstrapInput}
              label="Title"
            />
            <Field
              name="description"
              type="text"
              component={ReactstrapInput}
              label="Description"
            />
            <label>Status</label>
            <select
              id="statusSelect"
              name="status"
              className="browser-default custom-select position-relative form-group"
            >
              <option value="2">ToDo</option>
              <option value="1">Done</option>
              <option value="0">InProgress</option>
            </select>
            <div className="position-relative form-group">
              <label>Due date</label>
              <DayPickerInput
                placeholder={props.dueDate}
                onDayChange={props.changeDate}
              />
            </div>
            <Field
              name="estimatedTime"
              type="number"
              component={ReactstrapInput}
              label="Estimate Time"
            />
            <label>Assigned to</label>
            <GetUsers assignedTo={props.assignedTo} user={true} />
            <Button color="primary" type="submit" style={{ margin: 0 }}>
              Save
            </Button>
          </Form>
        </div>
      </div>
    )}
  </Formik>
);

export default EditTaskForm;