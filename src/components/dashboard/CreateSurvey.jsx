import React, { useState } from "react";
import axios from "axios";
import SiteButton from '../common/SiteBtn';
import { FiPlus } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
function CreateSurvey() {

  const [survey, setSurvey] = useState({
    title: "",
    description: "",
    questions: []
  });

  const addQuestion = () => {
    setSurvey({
      ...survey,
      questions: [
        ...survey.questions,
        {
          text: "",
          type: "rating",
          options: []
        }
      ]
    });
  };

  const updateQuestion = (index, field, value) => {
    const updated = [...survey.questions];
    updated[index][field] = value;

    // Reset options if not checkbox
    if (field === "type" && value !== "checkbox") {
      updated[index].options = [];
    }

    setSurvey({ ...survey, questions: updated });
  };

  const addOption = (qIndex) => {
    const updated = [...survey.questions];
    updated[qIndex].options.push({ text: "" });
    setSurvey({ ...survey, questions: updated });
  };

  const updateOption = (qIndex, oIndex, value) => {
    const updated = [...survey.questions];
    updated[qIndex].options[oIndex].text = value;
    setSurvey({ ...survey, questions: updated });
  };

  const submitSurvey = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("the token is :" + token);

      const res = await axios.post(
        "http://localhost:3000/api/v1/surveys",
        survey,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        }
      );

      alert("Survey Created Successfully!");
      console.log(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to create survey.");
    }
  };

  return (
    <div className="survey-box">
      <div className="d-flex align-items-center justify-content-between">
        <h2 style={{ color: "var(--primary-color)" }} className="mb-4">Create New Survey</h2>

        <div>
          {/* SUBMIT */}

          <SiteButton
            text="Create Survey"
            onClick={submitSurvey}
            icon={<FiPlusCircle size={18} />}
            color="#fff"
            bgColor="#142c50"
            borderColor="#142c50"
            hoverColor="#142c50"
            hoverBg="#fff"
            hoverBorder="#142c50"
            style={{
              padding: "0.6rem 1.4rem",
              fontWeight: 600,
              borderRadius: "8px"
            }}
          />

        </div>
      </div>
      {/* TITLE */}
      <input
        className="form-control my-2"
        placeholder="Survey Title"
        value={survey.title}
        onChange={(e) => setSurvey({ ...survey, title: e.target.value })}
      />

      {/* DESCRIPTION */}
      <textarea
        className="form-control my-2"
        placeholder="Description (optional)"
        value={survey.description}
        onChange={(e) =>
          setSurvey({ ...survey, description: e.target.value })
        }
      />

      {/* QUESTIONS */}
      <div className="mt-4">
        <h4 style={{ color: "var(--primary-color)" }}>All Questions</h4>

        {survey.questions.map((q, i) => (
          <div key={i} className="border rounded p-3 mt-3">
            {/* Question Text */}
            <input
              className="form-control"
              placeholder="Question text"
              value={q.text}
              onChange={(e) => updateQuestion(i, "text", e.target.value)}
            />

            {/* Question Type */}
            <div className="question-type-select-container">
              <select
                className="form-control mt-2 question-type-select"
                value={q.type}
                onChange={(e) => updateQuestion(i, "type", e.target.value)}
              >
                <option value="rating">Rating</option>
                <option value="checkbox">Checkbox List</option>
                <option value="textarea">Text Answer</option>
              </select>
            </div>


            {/* Options (only if checkbox) */}
            {q.type === "checkbox" && (
              <div className="mt-3">
                <h6>Options</h6>

                {q.options.map((opt, oi) => (
                  <input
                    key={oi}
                    className="form-control my-1"
                    placeholder={`Option ${oi + 1}`}
                    value={opt.text}
                    onChange={(e) =>
                      updateOption(i, oi, e.target.value)
                    }
                  />
                ))}


                <SiteButton
                  text="Add Option"
                  onClick={() => addOption(i)}
                  color="#fff"
                  bgColor="#142c50"
                  borderColor="#142c50"
                  hoverColor="#142c50"
                  hoverBg="#fff"
                  icon={<FiPlus size={18} />}
                  hoverBorder="#142c50"
                  style={{ padding: "0.6rem 1.2rem" }}
                />
              </div>
            )}
          </div>
        ))}

        {/* ADD QUESTION BTN */}
        <div className="d-flex align-items-center justify-content-end p-3 rounded-1 add-ques-box">
          <SiteButton
            text="Add Question"
            onClick={addQuestion}
            icon={<FiPlus size={18} />}
            color="#142c50"
            bgColor="#fff"
            borderColor="#142c50"
            hoverColor="#fff"
            hoverBg="#142c50"
            hoverBorder="#fff"
            style={{ padding: "0.6rem 1.2rem" }}
          />
        </div>

      </div>
    </div>
  );
}

export default CreateSurvey;
