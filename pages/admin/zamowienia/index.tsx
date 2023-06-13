import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { AxiosError } from "axios";
import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";
import { ApiError } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

import { GetAdminOrdersResponseDto } from "../../../api/api-types";
import { client } from "../../../api/client";
import Loading from "../../../components/atoms/Loading/Loading";
import { OrderStatusEnum } from "../../../components/atoms/OrderStatus/OrderStatus";
import SectionTitle from "../../../components/atoms/SectionTitle/SectionTitle";
import AdminLayout from "../../../components/layouts/AdminLayout/AdminLayout";
import AdminOrdersTable from "../../../components/organism/AdminOrdersTable/AdminOrdersTable";
import { convertOrderStatus } from "../../../utils/convertOrderStatus";

interface INextPageProps {
  orders: GetAdminOrdersResponseDto;
}

const AdminOrdersPage: NextPage<INextPageProps> = ({ orders }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailSearch, setEmailSearch] = useState<string>("");
  const [orderNumberSearch, setOrderNumberSearch] = useState<string>("");
  const [status, setStatus] = useState<OrderStatusEnum | string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setState: Dispatch<SetStateAction<string>>,
  ): void => {
    setState(e.target.value);
  };

  const submitSearch = (): void => {
    router.query.orderId = orderNumberSearch;
    router.query.email = emailSearch;

    if (status === "Wszystko") {
      router.query.status = "";
    } else {
      router.query.status = status;
    }

    Object.keys(router.query).forEach(
      (k) => router.query[k] === "" && delete router.query[k],
    );

    setIsLoading(true);
    router.push(router).finally(() => setIsLoading(false));
  };

  const handleChangeStatus = (e: SelectChangeEvent) =>
    setStatus(e.target.value as OrderStatusEnum);

  const handleResetStatus = () => setStatus("");

  return (
    <AdminLayout>
      <SectionTitle title='Zamówienia' />
      <Box mt={2}>
        <Paper>
          <Box p={2} display='flex' gap={2}>
            <TextField
              label='Numer zamówienia'
              size='small'
              onChange={(e) => handleChange(e, setOrderNumberSearch)}
            />
            <TextField
              label='Adres email'
              size='small'
              onChange={(e) => handleChange(e, setEmailSearch)}
            />
            <Box minWidth={150}>
              <FormControl fullWidth>
                <InputLabel id='status-select-label' size='small'>
                  Status
                </InputLabel>
                <Select
                  labelId='status-select-label'
                  id='status-select'
                  value={status}
                  label='Status'
                  onChange={handleChangeStatus}
                  size='small'>
                  <MenuItem value='Wszystko'>Wszystkie</MenuItem>
                  {Object.values(OrderStatusEnum).map((item) => (
                    <MenuItem key={item} value={item}>
                      {convertOrderStatus(item)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Button size='small' onClick={submitSearch} variant='outlined'>
              Szukaj
            </Button>
          </Box>
        </Paper>
      </Box>
      {isLoading && <Loading />}
      {!isLoading && (
        <AdminOrdersTable data={orders} setIsLoading={setIsLoading} />
      )}
    </AdminLayout>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const {
    page = 1,
    limit = 15,
    orderId = "",
    email = "",
    status = "",
  } = ctx.query;
  const token = getCookie("token", { res: ctx.res, req: ctx.req });

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  try {
    const { data: orders } = await client.get<GetAdminOrdersResponseDto>(
      "/orders",
      {
        params: {
          page: +page,
          limit: +limit,
          orderId,
          email,
          status,
        },
        headers: {
          Cookie: `token=${token};`,
        },
      },
    );

    return {
      props: {
        orders,
      },
    };
  } catch (err) {
    const error = err as AxiosError<ApiError>;

    if (error.response?.status === 401) {
      return {
        redirect: {
          destination: "/",
          permanent: true,
        },
      };
    }

    return {
      props: {
        error: error.response?.data.message || "Wystąpił nieznany błąd",
      },
    };
  }
};

export default AdminOrdersPage;
