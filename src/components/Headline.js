import React from "react";
import styled from "styled-components";
import trees from "../images/trees.jpg";

const Headline = () => {
  return (
    <NewsWrapper>
      <PieceOfNews>
        <div>
          <NewsTag>US</NewsTag>
          <NewsHeadline bigger>Poverty To Empowerment In Chicago</NewsHeadline>
        </div>
      </PieceOfNews>
      <PieceOfNews>
        <div>
          <NewsTag>Politics</NewsTag>
          <NewsHeadline>Divided American Lives During War</NewsHeadline>
        </div>
        <Img src={trees} />
      </PieceOfNews>
    </NewsWrapper>
  );
};

const NewsWrapper = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const PieceOfNews = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px dotted rgba(153, 204, 255, 0.4);
  &:last-child {
    border-bottom: none;
  }
  @media (min-width: 768px) {
    width: 48%;
    border-bottom: none;
  }
  
`;

const NewsTag = styled.h3`
  font-size: 0.95rem;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
`;

const NewsHeadline = styled.h2`
  font-size: ${({ bigger }) => (bigger ? "2rem" : "1.5rem")};
  margin-right: 1rem;
`;

const Img = styled.img`
  width: 100%;
  max-width: 100px;
  height: auto;
  margin-left: auto;
  display: block;
`;

export default Headline;
