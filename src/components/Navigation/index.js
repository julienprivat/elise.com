// == Import : npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


// == Import : local
import './navigation.scss';

// == Composant
const Navigation = ({ setActiveCategory, setActiveGender, tags, fetchPostsTag, fetchData, activeCategory }) => {

  const [tagsFind, setTagsFinds] = useState([]);
  const searchTags = (search) => {
    const searchLength = search.length;
    // Reg for select the same length string than the letter search
    if (searchLength > 1) {
      const limited = new RegExp(search, 'gi');
      setTagsFinds(
        tags
          .filter(tag => tag.name.match(limited))
          .map(tag => ([
            <div key={tag.id} className="tagsFind" onClick={handleFindPost} data={tag.id}>{tag.name}</div>,
            <hr />,
          ])),
      );
    }
  };

  const handleCloseTag = () => {
    const tagCardContainer = document.getElementById('tagCardContainer');
    tagCardContainer.innerHTML = '';
    fetchData();
  };

  const handleFindPost = (e) => {
    fetchPostsTag(e.currentTarget.getAttribute('data'));
    const input = document.getElementById('exampleForm.ControlInput1');
    const tagCardContainer = document.getElementById('tagCardContainer');
    const tagCard = document.createElement('div');
    tagCard.setAttribute('class', 'tagCard');
    tagCardContainer.appendChild(tagCard);
    tagCard.innerHTML = e.currentTarget.textContent + '<i class="material-icons closeCross">close</i>';
    const cross = document.querySelector('.closeCross');
    cross.addEventListener('click', handleCloseTag);
    input.value = '';
    setTagsFinds([]);
  }

  const handleChangeCategories = (e) => {
    setActiveCategory(e.currentTarget.value);
  };

  const handleChangeGender = (e) => {
    setActiveGender(e.currentTarget.value);
  };

  const handleSearch = (e) => {
    setTagsFinds([]);
    searchTags(e.target.value);
  };

  useEffect(() => {
    const searchPart = document.querySelector('.searchPart');
    const form = searchPart.firstChild.firstChild;
    if (activeCategory === 'EDITORIAL') {
      form.selectedIndex = 0;
    }
    if (activeCategory === 'ADVERTISING') {
      form.selectedIndex = 1;
    }
  }, [activeCategory]);

  return (
    <div id="navigation">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={6} className="searchPart">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select" onChange={handleChangeCategories}>
                <option value="EDITORIAL">EDITORIAL</option>
                <option value="ADVERTISING">ADVERTISING</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState" className="gender">
              <Form.Control as="select" onChange={handleChangeGender}>
                <option>ALL GENDER</option>
                <option>WOMEN</option>
                <option>MEN</option>
                <option>CHILDREN</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1" className="search">
              <Form.Control className="inputSearch" type="text" placeholder="SEARCH" onChange={handleSearch} />
              <div id="tagCardContainer"></div>
              <div className="results">
                {tagsFind}
              </div>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Navigation.propTypes = {
  setActiveCategory: PropTypes.func.isRequired,
  setActiveGender: PropTypes.func.isRequired,
  tags: PropTypes.array.isRequired,
  fetchPostsTag: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
  activeCategory: PropTypes.string.isRequired,
};

// == Export
export default Navigation;
