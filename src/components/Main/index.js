// == Import : npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import className from 'classnames';
// == Import : local

import './main.scss';

// == Composant
const Main = ({
  datas,
  activeCategory,
  categories,
  activeGender,
  about,
  closeAbout,
  aboutInfo,
}) => {
  const [newDatas, setNewDatas] = useState(datas);
  const [dataLg, setDataLg] = useState([]);
  const [dataMd, setDataMd] = useState([]);
  const [dataSm, setDataSm] = useState([]);
  const [aboutData, setAboutData] = useState([{
    mail: '',
    phone: '',
    clients: '',
  }]);

  // changement des formats colonnes au click sur une image
  const changeLarge = (e) => {
    if (window.innerWidth > 992) {
      e.target.parentNode.parentNode.setAttribute('class', 'col-lg-6 col-md-6 col-12');
    }
    if (window.innerWidth < 992 && window.innerWidth > 768) {
      e.target.parentNode.parentNode.setAttribute('class', 'col-lg-6 col-md-8 col-12');
    }
  };
  const changeLgCol = (e) => {
    const target = e.target.parentNode.parentNode;
    if (window.innerWidth > 992) {
      const colonnesLargeLG = document.querySelectorAll('#main .col-lg-6.col-md-6.col-12');
      const colonneLargeMD = document.querySelector('#main .col-lg-6.col-md-8.col-12');
      const colonneMediumLG = document.querySelector('#main .col-lg-4.col-md-6.col-12');
      const colonneMediumMD = document.querySelector('#main .col-lg-4.col-md-4.col-12');
      if (colonnesLargeLG.length > 1) {
        colonnesLargeLG.forEach((colonneLargeLG) => {
          if (colonneLargeLG.getAttribute('id') !== 'about' && target !== colonneLargeLG) {
            if (colonneLargeMD !== null) {
              colonneLargeMD.setAttribute('class', 'col-lg-4 col-md-6 col-12');
            }
            if (colonneMediumMD !== null) {
              colonneMediumMD.setAttribute('class', 'col-lg-2 col-md-0 col-0');
            }
            colonneLargeLG.setAttribute('class', 'col-lg-4 col-md-6 col-12');
            colonneMediumLG.setAttribute('class', 'col-lg-2 col-md-0 col-0');
          }
        });
      }
      if (colonnesLargeLG.length === 1) {
        if (colonneLargeMD !== null && colonneLargeMD !== target) {
          colonneLargeMD.setAttribute('class', 'col-lg-4 col-md-6 col-12');
        }
        if (colonneMediumMD !== null && colonneMediumMD !== target) {
          colonneMediumMD.setAttribute('class', 'col-lg-2 col-md-0 col-0');
        }
        if (colonneMediumLG !== null && colonneMediumLG !== target) {
          colonneMediumLG.setAttribute('class', 'col-lg-2 col-md-0 col-0');
        }
      }
    }
    if (window.innerWidth < 992 && window.innerWidth > 768) {
      const colonnesLargeLG = document.querySelectorAll('#main .col-lg-6.col-md-6.col-12');
      const colonneLargeMD = document.querySelector('#main .col-lg-6.col-md-8.col-12');
      const colonneMediumLG = document.querySelector('#main .col-lg-4.col-md-6.col-12');
      if (colonnesLargeLG.length > 1) {
        colonnesLargeLG.forEach((colonneLargeLG) => {
          if (colonneLargeLG.getAttribute('id') !== 'about') {
            if (colonneLargeMD !== null && target !== colonneLargeMD) {
              colonneLargeMD.setAttribute('class', 'col-lg-4 col-md-4 col-12');
            }
            colonneLargeLG.setAttribute('class', 'col-lg-4 col-md-4 col-12');
            colonneMediumLG.setAttribute('class', 'col-lg-4 col-md-4 col-12');
          }
        });
      }
      if (colonnesLargeLG.length === 1) {
        if (colonneLargeMD !== target) {
          colonneLargeMD.setAttribute('class', 'col-lg-4 col-md-4 col-12');
        }
      }
    }
  };


  // affichage du titre au touch sur l'écran
  const handleTitleMobile = (e) => {
    if (window.innerWidth < 768) {
      e.target.nextSibling.setAttribute('style', 'display: flex');
    }
  };

  const handleTitleMobileEnd = (e) => {
    if (window.innerWidth < 768) {
      e.target.nextSibling.setAttribute('style', 'display: none');
    }
  };

  useEffect(() => {
    if (aboutInfo !== undefined && aboutInfo.length !== 0) {
      setAboutData({
        mail: aboutInfo[0].mail,
        phone: aboutInfo[0].phone,
        clients: aboutInfo[0].clients,
      });
    }
  }, [aboutInfo]);

  // changement de categories et du genre dans la navigation change le contenu
  useEffect(() => {
    setNewDatas(datas);
  }, [datas]);

  useEffect(() => {
    const body = document.querySelector('body');
    const ht = document.querySelector('html');
    // safari
    if (ht.scrollTop === 0) {
      body.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // other
    if (body.scrollTop === 0) {
      ht.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [datas, newDatas]);

  useEffect(() => {
    const body = document.querySelector('body');
    body.scrollTo({ top: 0, behavior: 'smooth' });
  }, [newDatas]);

  useEffect(() => {
    categories.forEach((category) => {
      if (activeCategory === category.name) {
        setNewDatas(
          datas.map((data) => {
            let quidCategorie = false;
            data.categories.forEach((categoryReal) => {
              if (categoryReal === category.id) {
                quidCategorie = true;
              }
            });
            if (quidCategorie === true) {
              return (data);
            }
          })
        );
      }
    });
  }, [activeCategory, categories, datas]);

  useEffect(() => {
    if (activeGender === 'ALL GENDER') {
      setNewDatas(datas);
    }
    else {
      setNewDatas(
        datas.map((data) => {
          let quidGender = false;
          const { gender } = data;
          if (gender.length !== 0 && Array.isArray(gender)) {
            gender.forEach((genders) => {
              if (genders === activeGender) {
                quidGender = true;
              }
            });
          }
          if (quidGender === true) {
            return (data);
          }
        })
      )
    }
  }, [activeGender]);


  // affichage du contenu
  // colonne large //
  useEffect(() => {
    if (newDatas.length !== 0) {
      setDataLg(
        newDatas.map((data) => {
          if (data !== undefined) {
            let quidColonnes = false;
            if (data.colonnes.length !== 0) {
              data.colonnes.forEach((colonnes) => {
                if (colonnes === 'lg') {
                  quidColonnes = true;
                }
              });
              if (quidColonnes === true) {
                if (data.photoPost !== false) {
                  if (window.innerWidth < 768) {
                    return (
                      <div key={data.photoPost.sizes.large} id={data.id} className='imageContainer' onTouchStart={handleTitleMobile} onTouchEnd={handleTitleMobileEnd}>
                        <img
                        src={data.photoPost.sizes.large} 
                        alt={data.photoPost.title} 
                        onClick={handelShow} />
                        <div className="title" dangerouslySetInnerHTML={{ __html: data.title.rendered}} />
                      </div>
                    );
                  }
                  if ((window.innerWidth > 768)) {
                    return (
                      <div key={data.photoPost.url} id={data.id} className='imageContainer' onTouchStart={handleTitleMobile} onTouchEnd={handleTitleMobileEnd}>
                        <img
                        src={data.photoPost.url}
                        alt={data.photoPost.title}
                        onClick={handelShow} />
                        <div className="title" dangerouslySetInnerHTML={{ __html: data.title.rendered}} />
                      </div>
                    );
                  }
                }
                const colonne = document.getElementById('firstCol');
                if (colonne !== null) {
                  const ratio = (colonne.offsetWidth * 59) / 100;
                  const decoup = data.videoPost.split("allowfullscreen");
                  const reconst = [decoup[0] + `style="height:${ratio}px"` + decoup[1]];
                  
                  return (
                    <div className="iContainer" key={data.videoPost} onClick={handelShow} onTouchStart={handleTitleMobile} onTouchEnd={handleTitleMobileEnd}>
                      <div className="iframeContainer" onClick={handelShow} dangerouslySetInnerHTML={{ __html: reconst}} />
                      <div className="title" dangerouslySetInnerHTML={{ __html: data.title.rendered}} />
                      <div className="buttonUp" onClick={handelShow}></div>
                    </div>
                  );
                }
              }
            }
          }
        })
      );
    }
  }, [datas, newDatas]);

  // colonne Medium //
  useEffect(() => {
    if (newDatas.length !== 0) {
      setDataMd(
        newDatas.map((data) => {
          if (data !== undefined) {
            let quidColonnes = false;
            if (data.colonnes.length !== 0) {
              data.colonnes.forEach((colonnes) => {
                if (colonnes === 'md') {
                  quidColonnes = true;
                }
              });
              if (quidColonnes === true) {
                if (data.photoPost !== false) {
                  if (window.innerWidth < 768) {
                    return (
                      <div key={data.photoPost.sizes.large} className="imageContainer">
                        <img
                        src={data.photoPost.sizes.large}
                        alt={data.photoPost.title}
                        onClick={handelShow} />
                        <div className="title" dangerouslySetInnerHTML={{ __html: data.title.rendered}} />
                      </div>
                    );
                  }
                  if (window.innerWidth > 768) {
                    return (
                      <div key={data.photoPost.url} className="imageContainer">
                        <img
                        src={data.photoPost.url} 
                        alt={data.photoPost.title} 
                        onClick={handelShow} />
                        <div className="title" dangerouslySetInnerHTML={{ __html: data.title.rendered}} />
                      </div>
                    );
                  }
                }
                const colonne = document.getElementById('secondCol');
                if (colonne !== null) {
                  const ratio = (colonne.offsetWidth * 59) / 100;
                  const decoup = data.videoPost.split('allowfullscreen');
                  const reconst = [decoup[0] + `style="height:${ratio}px"` + decoup[1]];
                  return (
                    <div className="iContainer" key={data.videoPost} onClick={handelShow}>
                      <div className="iframeContainer" dangerouslySetInnerHTML={{ __html: reconst}} />
                      <div className="title" dangerouslySetInnerHTML={{ __html: data.title.rendered}} />
                      <div className="buttonUp" onClick={handelShow}></div>
                    </div>
                  );
                }
              }
            }
          }
        })
      );
    }
  }, [datas, newDatas]);

  // colonne small //
  useEffect(() => {
    if (newDatas.length !== 0) {
      setDataSm(
        newDatas.map((data) => {
          if (data !== undefined) {
            let quidColonnes = false;
            if (data.colonnes.length !== 0) {
              data.colonnes.forEach((colonnes) => {
                if (colonnes === 'sm') {
                  quidColonnes = true;
                }
              });
              if (quidColonnes === true) {
                if (data.photoPost !== false) {
                  if (window.innerWidth < 768) {
                    return (
                      <div key={data.photoPost.sizes.large} className="imageContainer">
                        <img 
                        src={data.photoPost.sizes.large} 
                        alt={data.photoPost.title} 
                        onClick={handelShow} />
                        <div className="title" dangerouslySetInnerHTML={{ __html: data.title.rendered}} />
                      </div>
                    );
                  }
                  if (window.innerWidth > 768) {
                    return (
                      <div key={data.photoPost.url} className="imageContainer">
                        <img
                        src={data.photoPost.url} 
                        alt={data.photoPost.title} 
                        onClick={handelShow} />
                        <div className="title" dangerouslySetInnerHTML={{ __html: data.title.rendered}} />
                      </div>
                    );
                  }
                }
                const colonne = document.getElementById('thirdCol');
                if (colonne !== null) {
                  const ratio = (colonne.offsetWidth * 59) / 100;
                  const decoup = data.videoPost.split("allowfullscreen");
                  const reconst = [decoup[0] + `style="height:${ratio}px"` + decoup[1]];
                  return (
                    <div key={data.videoPost} className="iContainer" onClick={handelShow}>
                      <div className="iframeContainer" dangerouslySetInnerHTML={{ __html: reconst}} />
                      <div className="title" dangerouslySetInnerHTML={{ __html: data.title.rendered}} />
                      <div className="buttonUp" onClick={handelShow}></div>
                    </div>
                  );
                }
              }
            }
          }
        })
      );
    }
  }, [datas, newDatas]);

  // remettre la première colonne en 6 quand le about est affiché
  useEffect(() => {
    if (about) {
      const firstCol = document.getElementById('firstCol');
      firstCol.setAttribute('class', 'col-lg-6 col-md-6 col-12');
    }
    handleResizeFrame();
  }, [about]);

  // resize des vidéos
  const handleResizeFrame = () => {
    // lg colonne //
    const lgColonnesLG = document.querySelectorAll('.col-lg-6.col-md-6.col-12');
    // const deco = document.querySelector('#firstCol .decoration');
    if (lgColonnesLG.length !== 1) {
      lgColonnesLG.forEach((lgColonneLG) => {
        if (lgColonneLG.getAttribute('id') !== 'about') {
          // deco.style.cssText = `width: ${lgColonne.clientWidth}px`;
          const lgHeight = (lgColonneLG.offsetWidth * 59) / 100;
          const lgIframes = document.querySelectorAll('.col-lg-6.col-md-6.col-12 iframe');
          if (lgIframes.length !== 0) {
            lgIframes.forEach((lgIframe) => {
              lgIframe.style.cssText = `height: ${lgHeight}px`;
            });
          }
        }
      });
    }
    const lgColonneMD = document.querySelector('.col-lg-6.col-md-8.col-12');
    if (lgColonneMD !== null) {
      const lgHeight = (lgColonneMD.offsetWidth * 59) / 100;
      const lgIframesMD = document.querySelectorAll('.col-lg-6.col-md-8.col-12 iframe');
      if (lgIframesMD.length !== 0) {
        lgIframesMD.forEach((lgIframeMD) => {
          lgIframeMD.style.cssText = `height: ${lgHeight}px`;
        });
      }
    }

    // md colonne //
    const mdColonneLG = document.querySelector('.col-lg-4.col-md-6.col-12');
    if (mdColonneLG !== null) {
      const mdHeight = (mdColonneLG.offsetWidth * 59) / 100;
      const mdIframes = document.querySelectorAll('.col-lg-4.col-md-6.col-12 iframe');
      if (mdIframes.length !== 0) {
        mdIframes.forEach((mdIframe) => {
          mdIframe.style.cssText = `height: ${mdHeight}px`;
        });
      }
    }
    const mdColonneMD = document.querySelector('.col-lg-4.col-md-4.col-12');
    if (mdColonneMD !== null) {
      const mdHeight = (mdColonneMD.offsetWidth * 59) / 100;
      const mdIframesMD = document.querySelectorAll('.col-lg-4.col-md-6.col-12 iframe');
      if (mdIframesMD.length !== 0) {
        mdIframesMD.forEach((mdIframeMD) => {
          mdIframeMD.style.cssText = `height: ${mdHeight}px`;
        });
      }
    }
    // sm colonne //
    const smColonne = document.querySelector('.col-lg-2.col-md-0.col-0');
    if (smColonne !== null) {
      const smHeight = (smColonne.offsetWidth * 59) / 100;
      const smIframes = document.querySelectorAll('.col-lg-2.col-md-0.col-0 iframe');
      if (smIframes.length !== 0) {
        smIframes.forEach((smIframe) => {
          smIframe.style.cssText = `height: ${smHeight}px`;
        });
      }
    }
  };

  const scrollProjectTop = (scroll, evt) => {
    const body = document.querySelector('body');
    const ht = document.querySelector('html');
    const element = evt.parentNode;
    const height = element.offsetHeight;
    const row = evt.offsetHeight;
    // safari
    if (ht.scrollTop === 0) {
      body.scrollBy({ top: scroll - body.scrollTop - height + row, behavior: 'smooth' });
    }
    // other
    if (body.scrollTop === 0) {
      ht.scrollBy({ top: scroll - ht.scrollTop - height + row, behavior: 'smooth' });
    }
  };

  const handelShow = (evt) => {
    closeAbout();
    changeLgCol(evt);
    changeLarge(evt);
    handleResizeFrame();
    const element = evt.currentTarget;
    const scroll = evt.currentTarget.offsetTop;
    scrollProjectTop(scroll, element);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResizeFrame);
  }, []);

  const quidAbout = className({
    aboutShow: about === true,
  });
  const quidAboutTitle = className({
    aboutShowTitle: about === true,
  });

  return (
    <div id="main" className={quidAbout}>
      <Container>
        <Row className={quidAboutTitle}>
          <Col xs={12} md={6} lg={6} id="firstCol">
            {dataLg}
            <div className="decoration"></div>
          </Col>
          <Col xs={12} md={6} lg={6} id="about" className={quidAbout}>
            <div className="about">
              <p>
                freelance base in Paris<br />
                Contact by mail <a href={`mailto:${aboutData.mail}`}> {aboutData.mail}</a> <br />
                or by phone +{aboutData.phone}
              </p>
              <div className="credit">
                creative developpement by <a href="https://www.instagram.com/privatpractices/" target="_blank">Julien Privat</a><br />
                font by <a href="https://edition.studio/type-foundry" target="_blank">edition.studio</a>
              </div>

              <div className="clients">
                selected clients: <br />
                {aboutData.clients}
              </div>

            </div>
          </Col>
          <Col xs={12} md={6} lg={4} id="secondCol" className={quidAbout}>
            {dataMd}
            <div className="decoration"></div>
          </Col>
          <Col xs={0} md={0} lg={2} id="thirdCol" className={quidAbout}>
            {dataSm}
            <div className="decoration"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Main.propTypes = {
  datas: PropTypes.array.isRequired,
  activeCategory: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  activeGender: PropTypes.string.isRequired,
  about: PropTypes.bool.isRequired,
  closeAbout: PropTypes.func.isRequired,
  aboutInfo: PropTypes.array.isRequired,
};

// == Export
export default Main;
