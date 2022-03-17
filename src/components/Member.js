import React from 'react';

const Member = ({ member, removeMember }) => {
    return (
        <div className="member">
            <div className="member-title">
                 Name : {member.title} {<br/>}
                <span className="member-year">
                    Email : {member.year}{<br/>}
                </span>
                <span className="member-id">
                    id : {member.memberid}{<br/>}
                </span>
                <span className="member-pw">
                    pw : {member.memberpw}{<br/>}
                </span>
                <span className="member-repw">
                    rwpw : {member.memberrepw}{<br/>}
                </span>
                <span className="member-cpf">
                    cpf : {member.membercpf}
                </span>
            </div>
            <div>
                <button onClick={() => removeMember(member.id)}>
                Delete
                </button>
            </div>
        </div>
    );
};

export default Member;