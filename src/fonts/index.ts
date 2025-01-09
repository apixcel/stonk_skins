import { DM_Sans, Poppins, Roboto } from "next/font/google";
const popins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const dm_sans = DM_Sans({
  weight: ["400", "500", "700"],
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
});

const fonts = {
  popins,
  dm_sans,
  roboto,
};

export default fonts;
