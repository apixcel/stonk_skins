import { DM_Sans, Poppins } from "next/font/google";
const popins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const dm_sans = DM_Sans({
  weight: ["400", "500", "700"],
});

const fonts = {
  popins,
  dm_sans,
};

export default fonts;
