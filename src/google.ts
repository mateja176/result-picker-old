import pickResult from "./pick-result";

pickResult(".LC20lb")(
  result => (result.parentElement as HTMLAnchorElement).href,
)(0);
