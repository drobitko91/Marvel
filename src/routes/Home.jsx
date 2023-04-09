import React, {useState} from 'react'

// import components
import Container from '../compopents/Container';
import SearchBar from '../compopents/SearchBar';
import Grid from '../compopents/Grid';

export default function Home() {
    const [heroes, setHeroes] = useState([])
  return (
    <Container>
      <h1>Discover Marvel Heroes</h1>
      <SearchBar setter={setHeroes} />
      <Grid>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </Grid>
    </Container>
  );
}
