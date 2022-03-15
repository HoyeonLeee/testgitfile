import React from 'react';

const TableFunction = ({ addTsble}) => {

    let unetMembers = [];

    const draw = {
        // 호출 시점 tbody 
        tbody : document.getElementById('membersTbody'),
        uid : 0,
        // Grid Table
        grid (members) {
            if (members.length > 0) {
                const nodeSize = this.tbody.childNodes.length;
                members.forEach((member, index) => {
                    const trElem = document.createElement('tr');
                    trElem.innerHTML += `<td> ${nodeSize > 0 ? nodeSize + index + 1 : index + 1}</td>`;
                    trElem.innerHTML += `<td>${member.name}</td>`;
                    trElem.innerHTML += `<td>${member.id}</td>`;
                    trElem.innerHTML += `<td>${member.pw}</td>`;
                    trElem.innerHTML += `<td>${member.cpf}</td>`;
                    
                    this.tbody.appendChild(trElem);
                });
            }
        },
        
        // Add Row
        add (member) {
            if (unetMembers.length === 1) this.tbody.innerHTML = '';
            this.grid(member);
            this.uid++;
        },

        // init Table
        init (members) {
            this.tbody.innerHTML = '';
            if (unetMembers.length === 0) {
                const trElem = document.createElement('tr');
                trElem.innerHTML += `<td colspan="9">데이터가 존재하지 않습니다.</td>`;
                this.tbody.appendChild(trElem);
            } else {
                this.uid = members[members.length - 1]['uid'] + 1;
                this.grid(members);
            }
        },
    };

};
export default TableFunction