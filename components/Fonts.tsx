import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
      /* Copied from https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&family=Raleway&display=swap */
      @font-face {
        font-family: "Ikaros";
        src: url("../src/fonts/Ikaros/Ikaros-Regular.otf");
      }
      `}
  />
)

export default Fonts