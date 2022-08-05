import React, { FC } from "react";
import CustomSelect from "./CustomSelect";
import gql from "graphql-tag";
import { useApplicantIndividualCompanyPositionsQuery } from "../graphql/generated";

gql`
  query ApplicantIndividualCompanyPositions {
    applicantIndividualCompanyPositions {
      data {
        id
        name
      }
    }
  }
`;

// interface SelectCompanyPositionProps {
//   error: boolean;
//   errorMessage: string;
//   value: string | string[] | null;
//   onChange: (value: string | string[] | null) => void;
// }

// TODO fix any
const SelectCompanyPosition: FC<any> = ({
  value,
  onChange,
  error,
  errorMessage,
}) => {
  const { data } = useApplicantIndividualCompanyPositionsQuery();
  const companyPositions = data?.applicantIndividualCompanyPositions?.data;

  return (
    <CustomSelect
      label="Company position"
      options={companyPositions?.map((el) => el.name) ?? []}
      value={value}
      onChange={onChange}
      error={error}
      errorMessage={errorMessage}
    />
  );
};

export default SelectCompanyPosition;
