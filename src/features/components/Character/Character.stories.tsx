import type { Meta, StoryObj } from "@storybook/react";
import { makeFragmentData } from "../../gql/fragment-masking";

import { Character, CHARACTER_FIELD } from "./Character";

const meta = {
  title: "components/Character",
  component: Character
} satisfies Meta<typeof Character>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // makeFragmentData: FragmentTypeを満たすオブジェクトを作ることができる
    character: makeFragmentData(
      {
        age: "16",
        image: {
          medium:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvOMvJ0CdQn1-P7ywsHskvtQeJJL5HMQZFuSTLroStujq7YvLfLIY8mlREBsJJFFg51yjyhEPtvfsXf0Pnfk5pz_E-kb49dDJp6ozH8PY6yDEpct7FBPdY1pgmwIcDtGYXySnmSqwMj6_H/s800/necchusyou_face_girl1.png"
        },
        name: {
          native: "名前"
        }
      },
      CHARACTER_FIELD
    )
  }
};
