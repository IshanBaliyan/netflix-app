import jumboData from '../fixtures/jumbo';
import { Jumbotron } from '../components';

export function JumbotronContainer() {
  return (

    // Use a container to map EVERY JUMBOTRON used (same jumbotron component is used several times)
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src = {item.image} alt={item.alt}></Jumbotron.Image>
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
    
  );
}