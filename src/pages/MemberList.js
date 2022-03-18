import React, { useState } from 'react';
import MemberForm from '../components/MemberForm';
import Member from '../components/Member';

const MembersList = () => {
  
    let unetMembers = [];
    const [members, setMembers] = useState([]);

    if (localStorage.length > 0) {
      unetMembers = [...JSON.parse(localStorage.getItem('MEMBER'))];
    };

    const removeMember = (id) => {


      unetMembers = unetMembers.filter(member => member.id !== parseInt(id));
      localStorage.setItem('MEMBER', JSON.stringify(unetMembers));


        setMembers(members.filter(member => {
          return member.id !== id;
        }));

      };

    const renderMembers = members.length ? members.map(member => {
        return (
          <Member 
            member={member} 
            key={member.id}
            removeMember={removeMember}
          />
        );
      }) : 'Dont have member data.';

      const addMember = (member) => {

        unetMembers = [...unetMembers, member];
        setMembers(unetMembers);
        localStorage.setItem("MEMBER", JSON.stringify(unetMembers));

      };

    return (
        <>
            <h1>Member list</h1>
            <MemberForm addMember={addMember} />
            {renderMembers}
        </>
    );
};

export default MembersList;