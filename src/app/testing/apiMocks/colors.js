import { API_BASE_URL, API_COLORS_ENDPOINT } from 'app/api/apiConstants';
import { rest } from 'msw';

export const get_colors_response = rest.get(
  `${API_BASE_URL}${API_COLORS_ENDPOINT}`,
  async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(['pink', 'cyan', 'black']),
      ctx.delay(2),
    );
  },
);
