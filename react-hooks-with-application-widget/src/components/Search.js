import React, { useState, useEffect } from "react";
import axios from "axios";
export default () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };
    const timeOutId = setTimeout(() => {
      if (term) search();
    }, 500);

    return () => {
      clearInterval(timeOutId);
    };
  }, [term]);

  const renderedItem = results.map((item) => {
    return (
      <div className="item" key={item.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${item.pageid}`}
            target="_blank"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{item.title}</div>
          <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
        </div>
      </div>
    );
  });
  const onValueChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div>
      <form className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            type="text"
            className="input"
            value={term}
            onChange={(event) => onValueChange(event)}
          />
        </div>
      </form>
      <div className="ui celled list">{renderedItem}</div>
    </div>
  );
};
