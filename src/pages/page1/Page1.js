import react, { useEffect, useState } from 'react';
import Observer from "../../utils/observer";
import Header from "../../common/Header";
import { P1_Label } from "../../common/lang"
import { language } from '../../recoil/languageRecoil';
import { useRecoilState } from "recoil";

const Page1 = () => {
  const [lang, setLang] = useRecoilState(language);

  // []안에 있는 값이 바뀔 때만 실행되는게 useEffect.
  useEffect(() => {
    Observer();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("language")) {
      setLang(sessionStorage.getItem("language"));
    } else {
      setLang(language)
    }
  }, [sessionStorage])

  const LANGUAGE_LABEL = lang && lang === "Vietnames" ? P1_Label.VI : P1_Label.EN;

  return (
    <div className="container">
      <Header showHomeButton={true} />
      <div className="h-component hidden">
        <div className="center">
        </div>
      </div>
      <div className="h-component flex-column left">
        <div className="p1_content">
          <h1>{LANGUAGE_LABEL.ASD_DEF_TITLE}</h1>
          <p>{LANGUAGE_LABEL.EN.ASD_DEF}</p>
        </div>

        <div className="p1_content">
          <h1>{P1_Label.EN.ASD_CLASSIFICATION_TITLE}</h1>
          <ul>
            <li>{P1_Label.EN.ASD_CLASSIFICATION1}</li>
            <li>{P1_Label.EN.ASD_CLASSIFICATION2}</li>
            <li>{P1_Label.EN.ASD_CLASSIFICATION3}</li>
            <li>{P1_Label.EN.ASD_CLASSIFICATION4}</li>
          </ul>
        </div>
        <div className="p1_content">
          <h1>{P1_Label.EN.ASD_CAUSE_TITLE}</h1>
          <p>
            {P1_Label.EN.ASD_CAUSE_DEF}
          </p>
          <ol>
            <li>{P1_Label.EN.ASD_CAUSE_DEF1}</li>
            <li>{P1_Label.EN.ASD_CAUSE_DEF2}</li>
            <li>{P1_Label.EN.ASD_CAUSE_DEF3}</li>
            <li>{P1_Label.EN.ASD_CAUSE_DEF4}</li>
          </ol>
        </div>
        <div className="p1_content">
          <h1>{P1_Label.EN.ASD_SYMPTOMS_TITLE}</h1>
          <p>
            {P1_Label.EN.ASD_SYMPTOMS_DEF}
            <a>{P1_Label.EN.ASD_SYMPTOMS_LINK}</a>
          </p>
          <ol>
            <li>{P1_Label.EN.ASD_SYMPTOMS_DEF1}</li>
            <li>{P1_Label.EN.ASD_SYMPTOMS_DEF2}</li>
            <li>{P1_Label.EN.ASD_SYMPTOMS_DEF3}</li>
            <li>{P1_Label.EN.ASD_SYMPTOMS_DEF4}</li>
            <li>{P1_Label.EN.ASD_SYMPTOMS_DEF5}</li>
            <li>{P1_Label.EN.ASD_SYMPTOMS_DEF6}</li>
            <li>{P1_Label.EN.ASD_SYMPTOMS_DEF7}</li>
          </ol>
        </div>
        <div className="p1_content">
          <h1>{P1_Label.EN.ASD_TREATMENTS_TITLE}</h1>
          <p>
            {P1_Label.EN.ASD_TREATMENTS_DEF}
          </p>
          <ol>
            <li>{P1_Label.EN.ASD_TREATMENTS_DEF1}</li>
            <li>{P1_Label.EN.ASD_TREATMENTS_DEF2}</li>
            <li>{P1_Label.EN.ASD_TREATMENTS_DEF3}</li>
            <li>{P1_Label.EN.ASD_TREATMENTS_DEF4}</li>
            <li>{P1_Label.EN.ASD_TREATMENTS_DEF5}</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Page1;
