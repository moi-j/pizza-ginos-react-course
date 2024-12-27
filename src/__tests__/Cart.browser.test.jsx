import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Cart from "../Cart";

test("snapshot with nothing in cart", () => {
    const { asFragment } = render(<Cart cart={[]}/>);
    expect(asFragment()).toMatchSnapshot();
});
 