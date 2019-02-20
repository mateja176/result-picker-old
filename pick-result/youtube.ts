import pickResult from "./pick-result";

pickResult("#video-title")(result => (result as HTMLAnchorElement).href)(0);
