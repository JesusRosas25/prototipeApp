import React, {useState} from 'react';
import { Col, Form } from 'react-bootstrap';
import { useFormik } from 'formik'

function ReactSwitch(props) {
  return (
    <>
      <Col md={props.col}>
        <Form.Group>
          <Form.Switch
            type="switch"
            id={props.id}
            name={props.name}
            label={props.label}
            checked={props.checked}
            onChange={props.onChange}
          />
        </Form.Group>
      </Col>
    </>
  )
}

export default function Switch() {
  const [checked, setChecked] = useState(false)
  const { handleSubmit, values } = useFormik({
    initialValues: {
      switch: checked
    },
    enableReinitialize: true,
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }, 400)
    }
  })
  return (
    <form className="form" onSubmit={handleSubmit}>
      <ReactSwitch
        name="switch"
        label="Switch"
        id="switch"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {/* just for testing */}
      <button type="submit" disabled={!checked}>
        Submit
      </button>
      <br />
      <br />
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </form>
  )
}