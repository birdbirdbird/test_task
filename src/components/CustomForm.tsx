import { Button, Card, CardContent, TextField } from "@mui/material";
import { Form } from "antd";
import React, { FC, useState } from "react";
import SelectCompanyPosition from "./SelectCompanyPosition";
import SelectCompanyRelation from "./SelectCompanyRelation";
import { css } from "@emotion/css";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";

const styles = {
  formItem: css`
    margin-bottom: 20px;
  `,
  form: css`
    width: 300px;
  `,
  formButton: css`
    display: flex;
    justify-content: center;
  `,
  card: css`
    min-width: 275px;
    padding: 5px;
  `,
  helperText: css`
    position: absolute;
    bottom: -8px;
    background: #fff;
    padding: 0px 5px;
    margin-left: 9px !important;
  `,
};

interface FieldData {
  name: string | number | (string | number)[];
  value?: any; // from docs
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
}

interface FormData {
  companyRelation: string[];
  companyPosition: string;
  someText: string;
  someLongText: string;
}

const CustomForm: FC = () => {
  const [form] = Form.useForm();
  const [fields, setFields] = useState<FieldData[]>([]);

  const error = (field: string) => form.getFieldError(field).length > 0;
  const errorMessage = (field: string) => form.getFieldError(field)[0];

  const onFinish = (values: FormData) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<FormData>) => {
    console.log("Failed:", errorInfo);
  };

  const formItem = {
    marginBottom: 20,
  };

  return (
    <div>
      <Card className={styles.card}>
        <CardContent>
          <Form
            form={form}
            fields={fields}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFieldsChange={(_, allFields) => {
              setFields(allFields);
            }}
            name="basic"
            className={styles.form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <div className={styles.formItem}>
              <Form.Item
                name="companyRelation"
                rules={[{ required: true, message: "Required!" }]}
                initialValue={[]}
                noStyle
              >
                <SelectCompanyRelation
                  error={error("companyRelation")}
                  errorMessage={errorMessage("companyRelation")}
                />
              </Form.Item>
            </div>
            <div className={styles.formItem}>
              <Form.Item
                name="companyPosition"
                rules={[{ required: true, message: "Required!" }]}
                initialValue={null}
                noStyle
              >
                <SelectCompanyPosition
                  error={error("companyPosition")}
                  errorMessage={errorMessage("companyPosition")}
                />
              </Form.Item>
            </div>
            <div className={styles.formItem}>
              <Form.Item
                style={formItem}
                className={styles.formItem}
                name="someText"
                rules={[
                  { required: true, message: "Required!" },
                  { min: 5, message: "Must be minimum 5 characters." },
                  { max: 10, message: "Must be maximum 10 characters." },
                ]}
                initialValue={""}
                noStyle
              >
                <TextField
                  fullWidth
                  label="someText"
                  error={error("someText")}
                  helperText={errorMessage("someText")}
                  FormHelperTextProps={{
                    className: styles.helperText,
                  }}
                />
              </Form.Item>
            </div>
            <div className={styles.formItem}>
              <Form.Item
                style={formItem}
                className={styles.formItem}
                name="someLongText"
                rules={[
                  { required: true, message: "Required!" },
                  { min: 5, message: "Must be minimum 5 characters." },
                  { max: 10, message: "Must be maximum 10 characters." },
                ]}
                initialValue={""}
                noStyle
              >
                <TextField
                  fullWidth
                  multiline
                  label="someLongText"
                  rows={4}
                  error={error("someLongText")}
                  helperText={errorMessage("someLongText")}
                  FormHelperTextProps={{
                    className: styles.helperText,
                  }}
                />
              </Form.Item>
            </div>
            <Form.Item className={styles.formButton}>
              <Button type="submit" variant="outlined">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomForm;
