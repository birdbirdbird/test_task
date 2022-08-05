import React, { FC } from "react";
import CustomSelect from "./CustomSelect";
import gql from "graphql-tag";
import { useApplicantIndividualCompanyRelationsQuery } from "../graphql/generated";

gql`
  query ApplicantIndividualCompanyRelations {
    applicantIndividualCompanyRelations {
      data {
        id
        name
      }
    }
  }
`;

// interface SelectCompanyRelationProps {
//   error: boolean;
//   errorMessage: string;
//   value: string | string[] | null;
//   onChange: (value: string | string[] | null) => void;
// }

// TODO fix any
const SelectCompanyRelation: FC<any> = ({
  value,
  onChange,
  error,
  errorMessage,
}) => {
  const { data } = useApplicantIndividualCompanyRelationsQuery();
  const companyRelations = data?.applicantIndividualCompanyRelations?.data;
  return (
    <CustomSelect
      label="Company relation"
      options={companyRelations?.map((el) => el.name) ?? []}
      multiple
      value={value}
      onChange={onChange}
      error={error}
      errorMessage={errorMessage}
    />
  );
};

export default SelectCompanyRelation;
