import React, { useEffect } from "react";
import { Container, Button } from "reactstrap";

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div class="p-5 bg-light text-center">
      <h1>Hello world</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni
        suscipit ipsa, non quasi deserunt atque quibusdam hic, recusandae esse,
        distinctio voluptate repudiandae optio ullam laboriosam repellendus
        quaerat tempore iure!
      </p>
      <Container>
        <Button color="secondary" outline>
          {" "}
          Start Using
        </Button>
      </Container>
    </div>
  );
}
export default Home;
