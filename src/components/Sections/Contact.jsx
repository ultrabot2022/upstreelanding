import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font18">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <FormContainer className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <FormLabel>First name:</FormLabel>
                <input type="text" id="fname" name="fname" className="font20 extraBold" />
                {/* <FormLabel className="font13">Email:</FormLabel>
                <input type="text" id="email" name="email" className="font20 extraBold" /> */}
                <FormLabel>Subject:</FormLabel>
                <input type="text" id="subject" name="subject" className="font20 extraBold" />
                <textarea rows="4" cols="50" type="text" id="message" name="message" className="font20 extraBold" />
              </Form>
              <SumbitWrapper>
                <ButtonInput type="submit" value="Send Message" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
              </SumbitWrapper>
            </FormContainer>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  text-align: center;
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const FormContainer = styled.div`
  margin: 0 auto;
  col-xs-12, 
  col-sm-12, 
  col-md-6, 
  col-lg-6
`
const Form = styled.form`
  padding: 70px 0 30px 0;
  margin: 0 auto;
  text-align: left;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const FormLabel = styled.label`
  text-align: left;
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









