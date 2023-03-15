import { CouponResponseDto } from "./api-types";
import { client } from "./client";

export const ActivateCoupon = async (
  code: string,
): Promise<CouponResponseDto> => {
  const { data } = await client.post<CouponResponseDto>(
    "/coupons/activate",
    { code },
    { withCredentials: true },
  );
  return data;
};
