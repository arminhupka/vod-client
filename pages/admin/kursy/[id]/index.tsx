import { Box, Button } from "@mui/material";
import { AxiosError } from "axios";
import { getCookie } from "cookies-next";
import { NextPage, NextPageContext } from "next";
import { ApiError } from "next/dist/server/api-utils";
import Head from "next/head";
import { ChangeEvent, useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { updateCourse } from "../../../../api/admin";
import {
  AdminGetCourseDetailsResponseDto,
  UpdateCourseDto,
} from "../../../../api/api-types";
import { client } from "../../../../api/client";
import { uploadImage } from "../../../../api/upload";
import SectionTitle from "../../../../components/atoms/SectionTitle/SectionTitle";
import UpdateCourseForm from "../../../../components/forms/UpdateCourseForm/UpdateCourseForm";
import AdminLayout from "../../../../components/layouts/AdminLayout/AdminLayout";
import { formatPrice } from "../../../../utils/formatPrice";

interface INextPage {
  course: AdminGetCourseDetailsResponseDto;
}

const AdminCourseDetails: NextPage<INextPage> = ({ course }) => {
  const [file, setFile] = useState<Blob | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const form = useForm<UpdateCourseDto>();

  const { mutate, isLoading } = useMutation<
    AdminGetCourseDetailsResponseDto,
    AxiosError<ApiError>,
    UpdateCourseDto
  >(async (form) => await updateCourse(course._id, form), {
    onSuccess: async () => {
      // router.reload();
    },
  });

  const handleCoursePublish = () => mutate({ status: "PUBLISHED" });

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleImageUpload = async () => {
    if (!file) return;
    setIsUploading(true);
    await uploadImage(course._id, file);
    setIsUploading(false);
  };

  const handleSave: SubmitHandler<UpdateCourseDto> = async (form) => {
    console.log(form);
    mutate(form);
  };

  useEffect(() => {
    form.setValue("name", course.name);
    form.setValue("shortDescription", course.shortDescription);
    form.setValue("description", course.description);
    form.setValue(
      "price",
      course.price ? formatPrice(course.price).replace("zł", "").trim() : null,
    );
    form.setValue(
      "salePrice",
      course.salePrice
        ? formatPrice(course.salePrice).replace("zł", "").trim()
        : null,
    );
    form.setValue("youtubePreview", course.youtubePreview || "");
  }, []);

  return (
    <>
      <Head>
        <title>Edycja Kursu | {process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      <AdminLayout isLoading={isUploading || isLoading}>
        <SectionTitle title='Edycja kursu' />
        <Box my={2} display='flex' justifyContent='flex-end' gap={2}>
          <Button variant='contained' onClick={form.handleSubmit(handleSave)}>
            Zapisz
          </Button>
          <Button variant='contained' onClick={handleCoursePublish}>
            Opublikuj
          </Button>
        </Box>
        <FormProvider {...form}>
          <UpdateCourseForm />
        </FormProvider>
      </AdminLayout>
    </>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { id } = ctx.query;

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
    const { data: course } = await client.get<AdminGetCourseDetailsResponseDto>(
      `/courses/${id}`,
      {
        headers: {
          Cookie: `token=${token};`,
        },
      },
    );

    return {
      props: {
        course,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }
};

export default AdminCourseDetails;
