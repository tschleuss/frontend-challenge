import { API_BASE_URL, API_SUBMIT_ENDPOINT } from "app/api/apiConstants";
import { rest } from "msw";

export const post_submit_error_response = rest.post(
  `${API_BASE_URL}${API_SUBMIT_ENDPOINT}`,
  async (req, res, ctx) => {
    return res(ctx.status(400), ctx.json({ error: "Error message" }));
  }
);

export const post_submit_success_response = rest.post(
  `${API_BASE_URL}${API_SUBMIT_ENDPOINT}`,
  async (req, res, ctx) => {
    return res(ctx.status(200), ctx.text("OK"));
  }
);
