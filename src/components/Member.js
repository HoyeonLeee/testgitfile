import React from 'react';

const Member = ({ member, removeMember }) => {
    return (
        <div className="member">
            <div className="member-title">
                 Name : {member.title} {<br/>}
                <span className="member-year">
                    Email : {member.year}
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