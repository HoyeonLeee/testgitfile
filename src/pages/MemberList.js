import React, { useState, useEffect } from 'react';
import MemberForm from '../components/MemberForm';
import Member from '../components/Member';

const MembersList = () => {


    const [members, setMembers] = useState([]);
    let unetMembers;

    useEffect(() => {
      if (localStorage.getItem('MEMBER') !== null) {
        setMembers(JSON.parse(localStorage.getItem('MEMBER')))
      };
    }, []);

    const removeMember = (id) => {
     
      unetMembers = members ;
      unetMembers = members.filter(member => member.id !== parseInt(id));
      
      localStorage.setItem('MEMBER', JSON.stringify(setMembers));

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
        unetMembers=[...members, member];
        setMembers(unetMembers);
        localStorage.setItem('MEMBER', JSON.stringify(unetMembers));  

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