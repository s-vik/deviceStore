import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import { Col, Form, InputGroup } from "react-bootstrap";
import * as Yup from "yup";
import { setNewGoods } from "../../redux/goods-reducer";
import { connect } from "react-redux";

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  price: Yup.number().required(),
  description: Yup.string().required(),
  date: Yup.date().required(),
  image: Yup.mixed().required(),
});

const ProductAdditionForm = ({ setNewGoods }) => {
  const onSubmit = (values, { setSubmitting }) => {
    setNewGoods(values);
    setSubmitting(false);
  };
  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={{
        name: "",
        price: 0,
        description: "",
        date: "",
        image: null,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        isSubmitting,
        values,
        errors,
        touched,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik102">
              <Form.Label>Имя</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
                isValid={touched.name && !errors.name}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
              <Form.Label>Цена</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Prepend></InputGroup.Prepend>
                <Form.Control
                  type="number"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  isInvalid={!!errors.price}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.price}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="3" controlId="validationFormik104">
              <Form.Control
                as="textarea"
                name="description"
                onChange={handleChange}
                placeholder="Description"
                value={values.description}
                isInvalid={!!errors.description}
                rows={3}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik105">
              <Form.Label>Дата</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.date}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.date}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.File
              className="position-relative"
              required
              name="image"
              label="Изображение"
              onChange={handleChange}
              isInvalid={!!errors.image}
              feedback={errors.image}
              id="validationFormik107"
              feedbackTooltip
            />
          </Form.Group>
          <Button disabled={isSubmitting} type="submit">
            Сохранить
          </Button>
        </Form>
      )}
    </Formik>
  );
};


export default connect(null, { setNewGoods })(ProductAdditionForm);
