import CommonContainer from "@/_components/shared/container/CommonContainer";
import CommonHeader from "@/_components/shared/header/CommonHeader";
import FeaturesList from "./FeaturesList";

export default function FeaturesSection() {
  return (
    <CommonContainer>
      <CommonHeader
        title={"Powerful Learning Features"}
        subtitle={
          "Our platform is designed to provide the best learning experience for both students and instructors."
        }
      />

      <FeaturesList />
    </CommonContainer>
  );
}
