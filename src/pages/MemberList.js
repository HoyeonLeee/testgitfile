import React, { useState } from 'react';
import MemberForm from '../components/MemberForm';
import Member from '../components/Member';

const MembersList = () => {
    const [members, setMembers] = useState([]);
    const removeMember = (id) => {
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
        setMembers([
          ...members,
          member
        ]);
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