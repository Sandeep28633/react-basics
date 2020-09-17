import React from "react";

const ApprovalCard = (props) => {
  return (
    <div class="ui cards">
      <div class="ui card">
        <div class="content">
           {props.children}
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <button class="ui green basic button">Approve</button>
            <button class="ui red basic button">Decline</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ApprovalCard;
