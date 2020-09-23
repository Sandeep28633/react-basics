import Axios from "axios";
import React, { useState, useEffect } from "react";

export default ({ language, text }) => {
  const [returnedData, setTranslatedData] = useState("");
  const [debounceText, setdebounceText] = useState(text);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setdebounceText(text);
    }, 500);
    return () => {
      clearInterval(timeOutId);
    };
  }, [text]);

  useEffect(() => {
    const translatedData = async () => {
      const { data } = await Axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debounceText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslatedData(data.data.translations[0].translatedText);
    };
    translatedData();
  }, [language, debounceText]);

  return <h3 className="ui header">{returnedData}</h3>;
};
