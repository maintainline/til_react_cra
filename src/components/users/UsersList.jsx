import styled from "@emotion/styled";
import React from "react";

function UsersList({
  id,
  nickname,
  username,
  email,
  address,
  phone,
  website,
  company,
}) {
  //js
  const { street, suite, city, zipcode } = address;
  const { lat, lng } = address.geo;
  const { name, catchPhrase, bs } = company;

  const UserCard = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border: 6px solid #daffd2;
    margin: 20px;
    padding: 20px;
    height: 300px;
    cursor: pointer;

    transition: all 0.2s;
    &:hover {
      transform: translateY(-10px);
    }
  `;

  const UserTitle = styled.h2`
    display: block;
    font-size: 20px;
    color: #242c1e;
    margin-bottom: 5px;
  `;

  const UserPhone = styled.div`
    display: block;
    /* background-color: red; */
    font-size: 13px;
    font-weight: 500;
    color: #38492c;
    margin-bottom: 10px;
  `;
  const UserAddress = styled.div`
    font-size: 13px;
    text-align: left;
    border-top: 1px solid #5e5e5e;
    color: #999;
    padding-top: 10px;
    display: block;
  `;
  const Usergeo = styled.div`
    font-size: 8px;
    margin-top: 10px;
    color: #64864e;
  `;
  const UserCompany = styled.div`
    border-radius: 15px;
    color: #64864e;
    line-height: 1.5;
    font-weight: 700;
  `;
  const Userinfo = styled.div`
    /* background-color: red; */
    padding: 10px 0;
    color: #64864e;
  `;
  //jsx
  return (
    <UserCard>
      <UserTitle>
        {id}.{username}
        {nickname}
      </UserTitle>
      <UserPhone>{phone}</UserPhone>
      <UserAddress>
        {address.street}.{address.suite}.{address.city} | {address.zipcode}
      </UserAddress>
      <Userinfo>
        {website} : {email}
      </Userinfo>
      <UserCompany>
        <h3>Company_</h3>
        {company.name}
        <br />
        {company.catchPhrase}
        <br />
        {company.bs}
      </UserCompany>
      <Usergeo>
        {address.geo.lat},{address.geo.lng}
      </Usergeo>
    </UserCard>
  );
}

export default UsersList;
