import { CouponResponseDto, CreateCouponDto } from "./api-types";
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

export const CreateCoupon = async (
  form: CreateCouponDto,
): Promise<CouponResponseDto> => {
  const { data } = await client.post<CouponResponseDto>("/coupons", form, {
    withCredentials: true,
  });
  return data;
};
