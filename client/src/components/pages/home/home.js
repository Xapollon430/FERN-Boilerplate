import * as S from "./Home.styles";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import PDF from "../../whitepaper.pdf";

const StyledButton = ({ text }) => {
  console.log(text);
  return (
    <Button
      style={{
        backgroundColor: "#d9d9d9",
        color: "black",
        width: 150,
        height: 50,
      }}
      variant="contained"
    >
      {text}
    </Button>
  );
};

const Home = () => {
  return (
    <S.HomeWrapper>
      <S.Banner>
        <S.Left>
          <S.BannerTitle>
            Healthcare at the
            <br />
            speed of thought.
          </S.BannerTitle>
          <Link to="/triage">
            <StyledButton text="Check In" />
          </Link>
        </S.Left>
        <S.Right>
          <a href="https://docs.google.com/presentation/d/1tluHQOhDaYj1VEQo1_lNZZHGbXYNH0JvtpCJ-y2x1Bk/">
            <StyledButton text="Google Slide" />
          </a>

          <a href={PDF} target="_blank">
            <StyledButton text="White Paper" />
          </a>

          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPv8svIpEfLF3d5npvEcLjqCoSD2MSeDysjREbYfaXqgn-Mw/viewform">
            <StyledButton text="Feedback Form" />
          </a>
        </S.Right>
      </S.Banner>

      <S.Bottom>
        <S.BottomTitle>Using Chat GPT for Medicine</S.BottomTitle>
        <S.BottomContentWrapper>
          <div>
            <S.BottomSubTitle>Receptionist</S.BottomSubTitle>
            <S.BottomText>
              The Auto Med medical receptionist can greet patients, validate
              insurance, and provide patients with a great customer service
              experience.
            </S.BottomText>
          </div>
          <div>
            <S.BottomSubTitle>Receptionist</S.BottomSubTitle>
            <S.BottomText>
              The Auto Med medical assistant can effectively triage patients,
              collect patient data, and prepare some notes for the clinician to
              add onto.
            </S.BottomText>
          </div>
          <div>
            <S.BottomSubTitle>Medical Assistant</S.BottomSubTitle>
            <S.BottomText>
              The Auto Med medical scribe can effectively note a patient
              encounter, come up with the proper CPT code, and prepare a
              document to reflect the entire appointment.
            </S.BottomText>
          </div>
          <div>
            <S.BottomSubTitle>Billers and Coders</S.BottomSubTitle>
            <S.BottomText>
              The Auto Med biller and coder can validate the medical encounter
              note, scrub the bills to be sent, and effectively correct any
              coding mistakes made by manual entry.
            </S.BottomText>
          </div>
        </S.BottomContentWrapper>
      </S.Bottom>
    </S.HomeWrapper>
  );
};

export default Home;