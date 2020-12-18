import { findAllByDisplayValue } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { Card, CategoryIcon, Collapse, Container, EmptyImage, Image, StartupName } from './styles';
const Startups = () => {

  const [startups, setStartups] = useState([])
  const [collapse, setCollapse] = useState({ id: '', collapse: findAllByDisplayValue })
  const [selectedStartup, setSelectedStartup] = useState({});
  const [imgError, setImagerError] = useState([]);

  const startupIcon = {
    biotech: '#4CAF50',
    fintech: '#2196f3',
    'digital security': '#ff5722'
  }

  useEffect(() => {
    (async () => {
      const respData = await fetch('http://localhost:5000/startups');
      const respjson = await respData.json();

      setStartups(respjson?.['startups'] || [])
    })()
  }, []);

  useEffect(() => {
    (async () => {
      const respData = await fetch(`http://localhost:5000/startups/${collapse.id}`);
      const respjson = await respData.json();
      if (!respjson) {
        console.log("Vish, deu erro hein")
        return;
      }
      setSelectedStartup(respjson);

    })()
  }, [collapse])

  const handleCollapse = (id) => {
    setSelectedStartup({})
    if (collapse.id === id) {
      setCollapse({ id: '' })
      return;
    }
    setCollapse({ id });
  }

  const handleImgError = (e) => {
    setImagerError(oldState => ([...oldState, e]))
  }

  return (
    <Container>
      {
        startups.map(startup => (
          <Card key={startup.id} onClick={() => handleCollapse(startup.id)}>

            <div>
              {!imgError.includes(startup.id) ?
                <Image src={startup.thumbnail} alt="" onError={() => handleImgError(startup.id)} />
                :
                <EmptyImage />
              }
              <StartupName>{startup.startup_name}</StartupName>
              <span>{startup.category}</span>
              <CategoryIcon color={startupIcon[startup.category.toLowerCase()]} />
            </div>
            {startup.id === collapse.id && (
              <Collapse>
                <span>{selectedStartup?.startup_name}</span>
                <span>{selectedStartup?.city}</span>
                <span>{selectedStartup?.description}</span>
              </Collapse>
            )}

          </Card>
        ))
      }
    </Container >
  )
}

export default Startups