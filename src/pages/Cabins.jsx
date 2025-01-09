import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img
        src="https://hkoqablxnyxnmzdglqli.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2025-01-09T16%3A10%3A48.615Z"
        alt=""
      />
    </Row>
  );
}

export default Cabins;
