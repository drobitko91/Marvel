import React, {useState} from 'react';

// import components
import Container from '../compopents/Container';
import SearchBar from '../compopents/SearchBar';
import Grid from '../compopents/Grid';
import Card from '../compopents/Card';

const IMAGE_SIZE = 'portrait_fantastic';

export default function Home() {
    const [heroes, setHeroes] = useState();

    let cards;

    if (heroes) {
      cards = heroes.map((hero) => (
        <Card 
        name={hero.name} 
        id={hero.id} 
        key={hero.id} 
        thumbnail={`${hero.thumbnail.path}/${IMAGE_SIZE}.${hero.thumbnail.extension}`}
        />
      ) );


      console.log(cards)
    }

    return (
      <Container>
        <h1>Discover Marvel Heroes</h1>
        <SearchBar setter={setHeroes}/>
        <Grid>
          {cards ? cards : null}
        </Grid>
      </Container>
    );
}
