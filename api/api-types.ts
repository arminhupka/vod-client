/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface NewCourseDto {
  /**
   * @minLength 3
   * @example "New Awesome Course"
   */
  name: string;
}

export interface CourseResponseDto {
  _id: string;
  name: string;
  price: number;
  salePrice: number;
  whatYouLearn: string[];
  courseIncludes: string[];
  description: string;
  shortDescription: string;
  status: string;
  slug: string;
  /** @format date-time */
  publishedAt: string;
  cover: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface UpdateCourseDto {
  /** @minLength 3 */
  name?: string;
  price?: number | null;
  salePrice?: number | null;
  whatYouLearn?: string[];
  courseIncludes?: string[];
  description?: string;
  shortDescription?: string;
  status?: "DRAFT" | "PUBLISHED";
  featured?: boolean;
  youtubePreview?: string;
  daysAvailable?: number;
}

export interface CourseListItem {
  _id: string;
  name: string;
  shortDescription: string;
  price: number;
  salePrice: number;
  difficultyLevel: string;
  lessonsCount: number;
  topicsCount: number;
  slug: string;
  featured: boolean;
  daysAvailable: number;
  cover: string;
}

export interface GetCoursesListResponseDto {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean;
  nextPage: boolean;
  docs: CourseListItem[];
}

export interface GetCoursesAdminItem {
  _id: string;
  name: string;
  price: number;
  salePrice: number;
  status: string;
  slug: string;
  lessonsCount: number;
  topicsCount: number;
  featured: boolean;
  /** @format date-time */
  publishedAt: string;
  daysAvailable: number;
  cover: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface AdminGetCoursesResponseDto {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean;
  nextPage: boolean;
  docs: GetCoursesAdminItem[];
}

export interface GetCourseResponseDto {
  _id: string;
  name: string;
  price: number;
  salePrice: number;
  whatYouLearn: string[];
  courseIncludes: string[];
  description: string;
  shortDescription: string;
  difficultyLevel: string;
  lessonsCount: number;
  topicsCount: number;
  youtubePreview: string | null;
  daysAvailable: number;
  slug: string;
  cover: string;
  featured: boolean;
  /** @format date-time */
  publishedAt: string;
}

export interface AdminGetCourseDetailsResponseDto {
  _id: string;
  name: string;
  price: number;
  salePrice: number;
  whatYouLearn: string[];
  courseIncludes: string[];
  description: string;
  shortDescription: string;
  difficultyLevel: string;
  lessonsCount: number;
  topicsCount: number;
  youtubePreview: string | null;
  daysAvailable: number;
  slug: string;
  /** @format date-time */
  publishedAt: string;
  cover: string;
  featured: boolean;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface GetCourseLessonsItemResponseDto {
  _id: string;
  title: string;
  description: string;
}

export interface AdminGetCourseLessonsItemResponseDto {
  _id: string;
  title: string;
  description: string;
  attachments: string[];
  videoLink: string;
  order: number;
  hasAttachments: boolean;
}

export interface GetCourseTopicsItemResponseDto {
  _id: string;
  title: string;
  summary: string;
  lessons: GetCourseLessonsItemResponseDto[];
}

export interface AdminGetCourseTopicsItemResponseDto {
  _id: string;
  title: string;
  summary: string;
  lessons: AdminGetCourseLessonsItemResponseDto[];
}

export interface ReviewCourseDto {
  _id: string;
  name: string;
}

export interface ReviewUserBillingDto {
  firstName: string;
  lastName: string;
}

export interface ReviewUserDto {
  _id: string;
  billing: ReviewUserBillingDto;
}

export interface ReviewDto {
  _id: string;
  title: string;
  review: string;
  course: ReviewCourseDto;
  user: ReviewUserDto;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface NewLessonDto {
  /** @minLength 3 */
  title: string;
  /** @minLength 16 */
  description: string;
  course: string;
  topic: string;
  order: number;
  videoLink: string;
}

export interface LessonResponseDto {
  _id: string;
  title: string;
  description: string;
  videoLink: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface UpdateLessonDto {
  title: string;
  description: string;
  videoLink: string;
}

export interface OkResponseDto {
  ok: boolean;
}

export interface NewTopicDto {
  /** Topic title */
  title: string;
  /** Topic long summary */
  summary: string;
  /** Course ID */
  course: string;
  /** Order number */
  order: number;
}

export interface TopicResponseDto {
  _id: string;
  title: string;
  summary: string;
  order: number;
}

export interface UpdateTopicDto {
  /** Topic title */
  title: string;
  /** Topic long summary */
  summary: string;
  /** Order number */
  order: number;
}

export interface NewOrderDto {
  orderItems: string[];
}

export interface OrderBillingDto {
  firstName: string;
  lastName: string;
  isCompany: boolean;
  companyName: string;
  vatNumber: string;
  street: string;
  country: string;
  city: string;
  postCode: string;
  companyStreet: string;
  companyCountry: string;
  companyPostCode: string;
  companyPostCity: string;
}

export interface OrderProductDto {
  _id: string;
  name: string;
  price: number;
  salePrice: number;
  slug: string;
}

export interface OrderItemDto {
  product: OrderProductDto[];
  price: number;
  tax: number;
}

export interface OrderUserDto {
  _id: string;
  email: string;
}

export interface OrderDto {
  _id: string;
  billing: OrderBillingDto;
  orderNumber: number;
  orderId: string;
  orderItems: OrderItemDto[];
  total: number;
  totalTax: number;
  totalSum: number;
  user: OrderUserDto;
  status: "NEW" | "IN_PROGRESS" | "COMPLETE" | "CANCELED" | "REFUNDED";
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface OrderListItemBilling {
  firstName: string;
  lastName: string;
  isCompany: boolean;
  vatNumber: string;
  companyName: string;
  street: string;
  city: string;
}

export interface OrderListItemUser {
  _id: string;
  email: string;
}

export interface OrdersListItemDto {
  _id: string;
  orderId: string;
  orderNumber: string;
  status: "NEW" | "IN_PROGRESS" | "COMPLETE" | "CANCELED" | "REFUNDED";
  billing: OrderListItemBilling;
  totalTax: number;
  total: number;
  totalSum: number;
  user: OrderListItemUser;
  /** @format date-time */
  paidAt: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface GetAdminOrdersResponseDto {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean;
  nextPage: boolean;
  docs: OrdersListItemDto[];
}

export interface RegisterUserDto {
  /** @minLength 3 */
  email: string;
  /** @minLength 6 */
  password: string;
  /** @minLength 6 */
  passwordConfirm: string;
  /** @minLength 3 */
  firstName: string;
  /** @minLength 3 */
  lastName: string;
}

export interface ResetPasswordRequestDto {
  email: string;
}

export interface ResetPasswordDto {
  /** @minLength 6 */
  password: string;
  /** @minLength 6 */
  passwordConfirm: string;
}

export interface UserListItemBillingDto {
  firstName: string;
  lastName: string;
}

export interface UsersListItemDto {
  _id: string;
  email: string;
  activated: boolean;
  courses: number;
  billing: UserListItemBillingDto;
}

export interface UsersListResponse {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean;
  nextPage: boolean;
  docs: UsersListItemDto[];
}

export interface FindAllInvoicesQueryDto {
  /** @min 1 */
  page?: number;
  /** @min 1 */
  limit?: number;
}

export interface InvoiceListItemOrderDto {
  _id: string;
  orderId: string;
}

export interface InvoiceListItemDto {
  _id: string;
  invoiceNumber: number;
  total: number;
  subtotal: number;
  tax: number;
  orderId: InvoiceListItemOrderDto;
  /** @format date-time */
  paidAt: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface FindAllInvoicesResponseDto {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean;
  nextPage: boolean;
  docs: InvoiceListItemDto[];
}

export interface NewReviewDto {
  course: string;
  title: string;
  review: string;
}

export interface UpdateReviewDto {
  title: string;
  review: string;
}

export interface LoginDto {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SimplyBillingResponseDto {
  firstName: string;
  lastName: string;
  isCompany: boolean;
  companyName: string;
  vatNumber: string;
  street: string;
  city: string;
  country: string;
  postCode: string;
  companyStreet: string;
  companyCountry: string;
  companyPostCode: string;
  companyCity: string;
}

export interface UserCoursesCourse {
  _id: string;
}

export interface SimplyUserLesson {
  _id: string;
  title: string;
  description: string;
}

export interface SimplyUserCurses {
  course: UserCoursesCourse;
  watchedLessons: SimplyUserLesson[];
  /** @format date-time */
  availableUntil: string;
}

export interface GetMeResponsesDto {
  _id: string;
  email: string;
  billing: SimplyBillingResponseDto;
  watchedLessons: string[];
  courses: SimplyUserCurses[];
  role: "ADMIN" | "USER";
}

export interface UserOrderListItem {
  _id: string;
  status: string;
  /** @format date-time */
  paidAt: string;
  orderId: string;
  orderNumber: number;
  total: number;
  totalTax: number;
  totalSum: number;
}

export interface GetOrdersResponseDto {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean;
  nextPage: boolean;
  docs: UserOrderListItem[];
}

export interface OrderBilling {
  firstName: string;
  lastName: string;
  isCompany: boolean;
  companyName: string;
  vatNumber: string;
  street: string;
  country: string;
  city: string;
  postCode: string;
  companyStreet: string;
  companyCountry: string;
  companyPostCode: string;
  companyPostCity: string;
}

export interface ProductItem {
  _id: string;
  name: string;
  slug: string;
}

export interface OrderItem {
  product: ProductItem;
  price: number;
  tax: number;
}

export interface GetOrderResponseDto {
  _id: string;
  status: "NEW" | "IN_PROGRESS" | "COMPLETE" | "CANCELED" | "REFUNDED";
  /** @format date-time */
  paidAt: string;
  billing: OrderBilling;
  orderItems: OrderItem[];
  orderId: string;
  orderNumber: number;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  total: number;
  totalTax: number;
  totalSum: number;
}

export interface UserCourseDto {
  _id: string;
  name: string;
  price: number;
  salePrice: number;
  slug: string;
  featured: boolean;
  lessonsCount: number;
  topicsCount: number;
  cover: string;
}

export interface GetUserCoursesDto {
  course: UserCourseDto;
  /** @format date-time */
  availableUntil: string;
}

export interface UserCourseResponseDto {
  _id: string;
  name: string;
  price: number;
  salePrice: number;
  whatYouLearn: string[];
  courseIncludes: string[];
  description: string;
  shortDescription: string;
  status: string;
  slug: string;
  /** @format date-time */
  publishedAt: string;
  cover: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface UserCourseLessonDto {
  _id: string;
  title: string;
  description: string;
  attachments: any[][];
  order: number;
  videoLink: string;
  hasAttachments: boolean;
}

export interface UpdateUserDto {
  firstName?: string;
  lastName?: string;
  companyName?: string;
  vatNumber?: string;
  street?: string;
  country?: string;
  city?: string;
  postCode?: string;
  email?: string;
  /** @minLength 6 */
  password?: string;
  /** @minLength 6 */
  passwordConfirm?: string;
  companyStreet?: string;
  companyCountry?: string;
  companyCity?: string;
  companyPostCode?: string;
}

export interface CreateCouponDto {
  code: string;
  course: string;
  courseAvailableDays?: number;
  /** @format date-time */
  availableUntil?: string;
}

export interface CouponCourse {
  _id: string;
  name: string;
  slug: string;
}

export interface CouponUser {
  _id: string;
  email: string;
}

export interface CouponResponseDto {
  _id: string;
  code: string;
  used: boolean;
  course: CouponCourse;
  user: CouponUser;
  courseAvailableDays: number;
  /** @format date-time */
  availableUntil: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface CouponsListResponseDto {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean;
  nextPage: boolean;
  docs: CouponResponseDto[];
}

export interface ActivateCourseDto {
  code: string;
}

export type CreateOrderDto = object;

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Olga Wałek API
 * @version 1.0
 * @contact
 *
 * Olga Wałek API Documentation
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name AppControllerGetHello
   * @request GET:/
   */
  appControllerGetHello = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: "GET",
      ...params,
    });

  courses = {
    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerCreateCourse
     * @summary Create new course
     * @request POST:/courses
     */
    coursesControllerCreateCourse: (data: NewCourseDto, params: RequestParams = {}) =>
      this.request<
        CourseResponseDto,
        {
          /** @example 400 */
          statusCode: number;
          /** @example "Bad Request" */
          message: string;
          /** @example "Bad Request" */
          error?: string;
        }
      >({
        path: `/courses`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerGetCourses
     * @summary Get all courses
     * @request GET:/courses
     */
    coursesControllerGetCourses: (params: RequestParams = {}) =>
      this.request<AdminGetCoursesResponseDto | GetCoursesListResponseDto, any>({
        path: `/courses`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerUpdateCourse
     * @summary Update course
     * @request PATCH:/courses/{id}
     */
    coursesControllerUpdateCourse: (id: string, data: UpdateCourseDto, params: RequestParams = {}) =>
      this.request<
        CourseResponseDto,
        {
          /** @example 404 */
          statusCode: number;
          /** @example "Course not found" */
          message: string;
          /** @example "Not Found" */
          error?: string;
        }
      >({
        path: `/courses/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerDeleteCourse
     * @summary Delete course with all lessons
     * @request DELETE:/courses/{id}
     */
    coursesControllerDeleteCourse: (id: string, params: RequestParams = {}) =>
      this.request<
        CourseResponseDto,
        {
          /** @example 404 */
          statusCode: number;
          /** @example "Course not found" */
          message: string;
          /** @example "Not Found" */
          error?: string;
        }
      >({
        path: `/courses/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerGetCourse
     * @summary Get course by id or slug
     * @request GET:/courses/{id}
     */
    coursesControllerGetCourse: (id: string, params: RequestParams = {}) =>
      this.request<
        AdminGetCourseDetailsResponseDto | GetCourseResponseDto,
        {
          /** @example 404 */
          statusCode: number;
          /** @example "Course not found" */
          message: string;
          /** @example "Not Found" */
          error?: string;
        }
      >({
        path: `/courses/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerGetCourseLessons
     * @summary Get course lessons by id or slug
     * @request GET:/courses/{id}/lessons
     */
    coursesControllerGetCourseLessons: (id: string, params: RequestParams = {}) =>
      this.request<
        AdminGetCourseLessonsItemResponseDto | GetCourseLessonsItemResponseDto,
        {
          /** @example 404 */
          statusCode: number;
          /** @example "Not Found" */
          message: string;
          /** @example "Not Found" */
          error?: string;
        }
      >({
        path: `/courses/${id}/lessons`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerGetCourseTopics
     * @summary Get course topics by id or slug
     * @request GET:/courses/{id}/topics
     */
    coursesControllerGetCourseTopics: (id: string, params: RequestParams = {}) =>
      this.request<
        AdminGetCourseTopicsItemResponseDto | GetCourseTopicsItemResponseDto,
        {
          /** @example 404 */
          statusCode: number;
          /** @example "Not Found" */
          message: string;
          /** @example "Not Found" */
          error?: string;
        }
      >({
        path: `/courses/${id}/topics`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerGetCourseReviews
     * @summary Get course reviews
     * @request GET:/courses/{id}/reviews
     */
    coursesControllerGetCourseReviews: (id: string, params: RequestParams = {}) =>
      this.request<ReviewDto[], any>({
        path: `/courses/${id}/reviews`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerGenerateCertificate
     * @summary Generate certificate
     * @request GET:/courses/{id}/certificate
     * @secure
     */
    coursesControllerGenerateCertificate: (id: string, params: RequestParams = {}) =>
      this.request<
        any,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 403 */
            statusCode: number;
            /** @example "Forbidden" */
            message: string;
            /** @example "Forbidden" */
            error?: string;
          }
      >({
        path: `/courses/${id}/certificate`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  lessons = {
    /**
     * No description
     *
     * @tags Lessons
     * @name LessonsControllerCreateLesson
     * @summary Create new lesson
     * @request POST:/lessons
     * @secure
     */
    lessonsControllerCreateLesson: (data: NewLessonDto, params: RequestParams = {}) =>
      this.request<
        LessonResponseDto,
        | {
            /** @example 400 */
            statusCode: number;
            /** @example "Bad Request" */
            message: string;
            /** @example "Bad Request" */
            error?: string;
          }
        | {
            /** @example 404 */
            statusCode: number;
            /** @example "Not Found" */
            message: string;
            /** @example "Not Found" */
            error?: string;
          }
      >({
        path: `/lessons`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Lessons
     * @name LessonsControllerUpdateLesson
     * @summary Update lesson
     * @request PATCH:/lessons/{id}
     * @secure
     */
    lessonsControllerUpdateLesson: (id: string, data: UpdateLessonDto, params: RequestParams = {}) =>
      this.request<
        LessonResponseDto,
        | {
            /** @example 400 */
            statusCode: number;
            /** @example "Bad Request" */
            message: string;
            /** @example "Bad Request" */
            error?: string;
          }
        | {
            /** @example 404 */
            statusCode: number;
            /** @example "Not Found" */
            message: string;
            /** @example "Not Found" */
            error?: string;
          }
      >({
        path: `/lessons/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Lessons
     * @name LessonsControllerDeleteLesson
     * @summary Delete lesson
     * @request DELETE:/lessons/{id}
     * @secure
     */
    lessonsControllerDeleteLesson: (id: string, params: RequestParams = {}) =>
      this.request<
        LessonResponseDto,
        {
          /** @example 404 */
          statusCode: number;
          /** @example "Not Found" */
          message: string;
          /** @example "Not Found" */
          error?: string;
        }
      >({
        path: `/lessons/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Lessons
     * @name LessonsControllerSetWatchedLesson
     * @summary Mark lesson as watched/unwatcher
     * @request PUT:/lessons/{id}/watched
     * @secure
     */
    lessonsControllerSetWatchedLesson: (id: string, params: RequestParams = {}) =>
      this.request<
        OkResponseDto,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 404 */
            statusCode: number;
            /** @example "Not Found" */
            message: string;
            /** @example "Not Found" */
            error?: string;
          }
      >({
        path: `/lessons/${id}/watched`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  topics = {
    /**
     * No description
     *
     * @tags Topics
     * @name TopicsControllerNewTopic
     * @summary Create new course topic
     * @request POST:/topics
     * @secure
     */
    topicsControllerNewTopic: (data: NewTopicDto, params: RequestParams = {}) =>
      this.request<
        TopicResponseDto,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 403 */
            statusCode: number;
            /** @example "Forbidden" */
            message: string;
            /** @example "Forbidden" */
            error?: string;
          }
      >({
        path: `/topics`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Topics
     * @name TopicsControllerUpdateTopic
     * @summary Update course topic
     * @request PATCH:/topics/{id}
     * @secure
     */
    topicsControllerUpdateTopic: (id: string, data: UpdateTopicDto, params: RequestParams = {}) =>
      this.request<
        TopicResponseDto,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 403 */
            statusCode: number;
            /** @example "Forbidden" */
            message: string;
            /** @example "Forbidden" */
            error?: string;
          }
        | {
            /** @example 404 */
            statusCode: number;
            /** @example "Not Found" */
            message: string;
            /** @example "Not Found" */
            error?: string;
          }
      >({
        path: `/topics/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Topics
     * @name TopicsControllerDeleteTopic
     * @summary Delete course topic
     * @request DELETE:/topics/{id}
     * @secure
     */
    topicsControllerDeleteTopic: (id: string, params: RequestParams = {}) =>
      this.request<
        TopicResponseDto,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 403 */
            statusCode: number;
            /** @example "Forbidden" */
            message: string;
            /** @example "Forbidden" */
            error?: string;
          }
        | {
            /** @example 404 */
            statusCode: number;
            /** @example "Not Found" */
            message: string;
            /** @example "Not Found" */
            error?: string;
          }
      >({
        path: `/topics/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  orders = {
    /**
     * No description
     *
     * @tags Orders
     * @name OrdersControllerNewOrder
     * @summary Create new order
     * @request POST:/orders
     * @secure
     */
    ordersControllerNewOrder: (data: NewOrderDto, params: RequestParams = {}) =>
      this.request<
        OrderDto,
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/orders`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orders
     * @name OrdersControllerGetOrders
     * @summary Get all orders
     * @request GET:/orders
     * @secure
     */
    ordersControllerGetOrders: (
      query: {
        orderId: string;
        email: string;
        status: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetAdminOrdersResponseDto,
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/orders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orders
     * @name OrdersControllerGetOrder
     * @summary Get order details
     * @request GET:/orders/{id}
     * @secure
     */
    ordersControllerGetOrder: (id: string, params: RequestParams = {}) =>
      this.request<
        OrderDto,
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/orders/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orders
     * @name OrdersControllerGetInvoice
     * @summary Download invoice
     * @request GET:/orders/{id}/invoice
     * @secure
     */
    ordersControllerGetInvoice: (id: string, params: RequestParams = {}) =>
      this.request<
        any,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 403 */
            statusCode: number;
            /** @example "Forbidden" */
            message: string;
            /** @example "Forbidden" */
            error?: string;
          }
        | {
            /** @example 404 */
            statusCode: number;
            /** @example "Not Found" */
            message: string;
            /** @example "Not Found" */
            error?: string;
          }
      >({
        path: `/orders/${id}/invoice`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerRegister
     * @summary User register
     * @request POST:/users
     */
    usersControllerRegister: (data: RegisterUserDto, params: RequestParams = {}) =>
      this.request<OkResponseDto, any>({
        path: `/users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerFindAll
     * @summary Get all users
     * @request GET:/users
     * @secure
     */
    usersControllerFindAll: (
      query: {
        /** @min 1 */
        page?: number;
        /** @min 1 */
        limit?: number;
        keyword: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UsersListResponse,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 403 */
            statusCode: number;
            /** @example "Forbidden" */
            message: string;
            /** @example "Forbidden" */
            error?: string;
          }
      >({
        path: `/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerActivateAccount
     * @summary Activating user account
     * @request GET:/users/activate/{token}
     */
    usersControllerActivateAccount: (token: string, params: RequestParams = {}) =>
      this.request<
        OkResponseDto,
        {
          /** @example 404 */
          statusCode: number;
          /** @example "Not Found" */
          message: string;
          /** @example "Not Found" */
          error?: string;
        }
      >({
        path: `/users/activate/${token}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerResetPasswordRequest
     * @summary Request password change
     * @request POST:/users/reset-password
     */
    usersControllerResetPasswordRequest: (data: ResetPasswordRequestDto, params: RequestParams = {}) =>
      this.request<OkResponseDto, any>({
        path: `/users/reset-password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerResetPasswordWithToken
     * @summary Reset password with token
     * @request POST:/users/reset-password/{token}
     */
    usersControllerResetPasswordWithToken: (token: string, data: ResetPasswordDto, params: RequestParams = {}) =>
      this.request<
        OkResponseDto,
        {
          /** @example 404 */
          statusCode: number;
          /** @example "Not Found" */
          message: string;
          /** @example "Not Found" */
          error?: string;
        }
      >({
        path: `/users/reset-password/${token}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  invoices = {
    /**
     * No description
     *
     * @tags Invoices
     * @name InvoicesControllerFindAll
     * @summary Fetch all invoices
     * @request GET:/invoices
     * @secure
     */
    invoicesControllerFindAll: (data: FindAllInvoicesQueryDto, params: RequestParams = {}) =>
      this.request<
        FindAllInvoicesResponseDto,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 403 */
            statusCode: number;
            /** @example "Forbidden" */
            message: string;
            /** @example "Forbidden" */
            error?: string;
          }
      >({
        path: `/invoices`,
        method: "GET",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  reviews = {
    /**
     * No description
     *
     * @tags Reviews
     * @name ReviewsControllerNewReview
     * @request POST:/reviews
     * @secure
     */
    reviewsControllerNewReview: (data: NewReviewDto, params: RequestParams = {}) =>
      this.request<
        ReviewDto,
        | {
            /** @example 400 */
            statusCode: number;
            /** @example "Bad Request" */
            message: string;
            /** @example "Bad Request" */
            error?: string;
          }
        | {
            /** @example 409 */
            statusCode: number;
            /** @example "Conflict" */
            message: string;
            /** @example "Conflict" */
            error?: string;
          }
      >({
        path: `/reviews`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reviews
     * @name ReviewsControllerDeleteReview
     * @request DELETE:/reviews/{id}
     * @secure
     */
    reviewsControllerDeleteReview: (id: string, params: RequestParams = {}) =>
      this.request<
        ReviewDto,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 403 */
            statusCode: number;
            /** @example "Forbidden" */
            message: string;
            /** @example "Forbidden" */
            error?: string;
          }
        | {
            /** @example 404 */
            statusCode: number;
            /** @example "Not Found" */
            message: string;
            /** @example "Not Found" */
            error?: string;
          }
      >({
        path: `/reviews/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reviews
     * @name ReviewsControllerUpdateReview
     * @request PATCH:/reviews/{id}
     * @secure
     */
    reviewsControllerUpdateReview: (id: string, data: UpdateReviewDto, params: RequestParams = {}) =>
      this.request<
        ReviewDto,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 403 */
            statusCode: number;
            /** @example "Forbidden" */
            message: string;
            /** @example "Forbidden" */
            error?: string;
          }
        | {
            /** @example 404 */
            statusCode: number;
            /** @example "Not Found" */
            message: string;
            /** @example "Not Found" */
            error?: string;
          }
      >({
        path: `/reviews/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerLogin
     * @summary User login
     * @request POST:/auth/login
     */
    authControllerLogin: (data: LoginDto, params: RequestParams = {}) =>
      this.request<
        OkResponseDto,
        | {
            /** @example 403 */
            statusCode: number;
            /** @example "Forbidden" */
            message: string;
            /** @example "Forbidden" */
            error?: string;
          }
        | {
            /** @example 404 */
            statusCode: number;
            /** @example "Not Found" */
            message: string;
            /** @example "Not Found" */
            error?: string;
          }
      >({
        path: `/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerLogout
     * @summary User logout
     * @request GET:/auth/logout
     * @secure
     */
    authControllerLogout: (params: RequestParams = {}) =>
      this.request<
        OkResponseDto,
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/auth/logout`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerGetAuth
     * @summary Get auth confirmation
     * @request GET:/auth/me
     * @secure
     */
    authControllerGetAuth: (params: RequestParams = {}) =>
      this.request<
        GetMeResponsesDto,
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/auth/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @tags User
     * @name UserControllerGetOrders
     * @summary Get current user orders
     * @request GET:/user/orders
     */
    userControllerGetOrders: (params: RequestParams = {}) =>
      this.request<
        GetOrdersResponseDto,
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/user/orders`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerGetOrder
     * @summary Get order details
     * @request GET:/user/orders/{id}
     */
    userControllerGetOrder: (id: string, params: RequestParams = {}) =>
      this.request<
        GetOrderResponseDto,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 404 */
            statusCode: number;
            /** @example "Not Found" */
            message: string;
            /** @example "Not Found" */
            error?: string;
          }
      >({
        path: `/user/orders/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerGetCourses
     * @summary Get User Courses
     * @request GET:/user/courses
     */
    userControllerGetCourses: (params: RequestParams = {}) =>
      this.request<
        GetUserCoursesDto[],
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/user/courses`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerGetCourse
     * @summary Get course details
     * @request GET:/user/courses/{id}
     */
    userControllerGetCourse: (id: string, params: RequestParams = {}) =>
      this.request<
        UserCourseResponseDto,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 404 */
            statusCode: number;
            /** @example "Not Found" */
            message: string;
            /** @example "Not Found" */
            error?: string;
          }
      >({
        path: `/user/courses/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerGetCourseLesson
     * @summary Get course lesson
     * @request GET:/user/courses/{course}/lesson/{id}
     */
    userControllerGetCourseLesson: (id: string, course: string, params: RequestParams = {}) =>
      this.request<
        UserCourseLessonDto,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 403 */
            statusCode: number;
            /** @example "Forbidden" */
            message: string;
            /** @example "Forbidden" */
            error?: string;
          }
        | {
            /** @example 404 */
            statusCode: number;
            /** @example "Not Found" */
            message: string;
            /** @example "Not Found" */
            error?: string;
          }
      >({
        path: `/user/courses/${course}/lesson/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerGetWatchedLessons
     * @summary Get array of watched lessons ids
     * @request GET:/user/watched
     */
    userControllerGetWatchedLessons: (params: RequestParams = {}) =>
      this.request<
        string[],
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 403 */
            statusCode: number;
            /** @example "Forbidden" */
            message: string;
            /** @example "Forbidden" */
            error?: string;
          }
      >({
        path: `/user/watched`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerUpdateUser
     * @summary Update current user
     * @request PATCH:/user
     */
    userControllerUpdateUser: (data: UpdateUserDto, params: RequestParams = {}) =>
      this.request<
        GetMeResponsesDto,
        | {
            /** @example 400 */
            statusCode: number;
            /** @example "Bad Request" */
            message: string;
            /** @example "Bad Request" */
            error?: string;
          }
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
      >({
        path: `/user`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  coupons = {
    /**
     * No description
     *
     * @tags Coupons
     * @name CouponsControllerCreate
     * @summary Creating new coupon
     * @request POST:/coupons
     * @secure
     */
    couponsControllerCreate: (data: CreateCouponDto, params: RequestParams = {}) =>
      this.request<
        CouponResponseDto,
        | {
            /** @example 400 */
            statusCode: number;
            /** @example "Bad Request" */
            message: string;
            /** @example "Bad Request" */
            error?: string;
          }
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
      >({
        path: `/coupons`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Coupons
     * @name CouponsControllerFindAll
     * @summary Delete coupon
     * @request GET:/coupons
     * @secure
     */
    couponsControllerFindAll: (
      query?: {
        /** @min 1 */
        page?: number;
        /** @min 1 */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        CouponsListResponseDto,
        | {
            /** @example 400 */
            statusCode: number;
            /** @example "Bad Request" */
            message: string;
            /** @example "Bad Request" */
            error?: string;
          }
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
      >({
        path: `/coupons`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Coupons
     * @name CouponsControllerDelete
     * @summary Delete coupon
     * @request DELETE:/coupons/{id}
     * @secure
     */
    couponsControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        CouponResponseDto,
        | {
            /** @example 400 */
            statusCode: number;
            /** @example "Bad Request" */
            message: string;
            /** @example "Bad Request" */
            error?: string;
          }
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
      >({
        path: `/coupons/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Coupons
     * @name CouponsControllerActivate
     * @summary Assigning course to user by providing code
     * @request POST:/coupons/activate
     * @secure
     */
    couponsControllerActivate: (data: ActivateCourseDto, params: RequestParams = {}) =>
      this.request<
        CouponResponseDto,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 404 */
            statusCode: number;
            /** @example "Not Found" */
            message: string;
            /** @example "Not Found" */
            error?: string;
          }
      >({
        path: `/coupons/activate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  payu = {
    /**
     * No description
     *
     * @name PayuControllerCreate
     * @request POST:/payu/create
     */
    payuControllerCreate: (data: CreateOrderDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/payu/create`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name PayuControllerWebhook
     * @request POST:/payu/webhook/{id}
     */
    payuControllerWebhook: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/payu/webhook/${id}`,
        method: "POST",
        ...params,
      }),
  };
  upload = {
    /**
     * No description
     *
     * @tags Upload
     * @name UploadControllerUpload
     * @summary Uploading image
     * @request POST:/upload
     * @secure
     */
    uploadControllerUpload: (params: RequestParams = {}) =>
      this.request<
        string,
        | {
            /** @example 400 */
            statusCode: number;
            /** @example "Bad Request" */
            message: string;
            /** @example "Bad Request" */
            error?: string;
          }
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
      >({
        path: `/upload`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  admin = {
    /**
     * No description
     *
     * @tags Admin
     * @name AdminControllerFindAllCourses
     * @summary Get all courses
     * @request GET:/admin/courses
     * @secure
     */
    adminControllerFindAllCourses: (params: RequestParams = {}) =>
      this.request<
        AdminGetCoursesResponseDto,
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/admin/courses`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminControllerGetCourse
     * @summary Get course details
     * @request GET:/admin/courses/{id}
     * @secure
     */
    adminControllerGetCourse: (id: string, params: RequestParams = {}) =>
      this.request<
        any,
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 404 */
            statusCode: number;
            /** @example "Not Found" */
            message: string;
            /** @example "Not Found" */
            error?: string;
          }
      >({
        path: `/admin/courses/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminControllerGetCourseTopics
     * @summary Get course topics
     * @request GET:/admin/courses/{id}/topics
     * @secure
     */
    adminControllerGetCourseTopics: (id: string, params: RequestParams = {}) =>
      this.request<
        AdminGetCourseTopicsItemResponseDto[],
        | {
            /** @example 401 */
            statusCode: number;
            /** @example "Unauthorized" */
            message: string;
            /** @example "Unauthorized" */
            error?: string;
          }
        | {
            /** @example 404 */
            statusCode: number;
            /** @example "Not Found" */
            message: string;
            /** @example "Not Found" */
            error?: string;
          }
      >({
        path: `/admin/courses/${id}/topics`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminControllerGetAllCourses
     * @summary Get all courses without pagination
     * @request GET:/admin/c
     * @secure
     */
    adminControllerGetAllCourses: (
      query: {
        status: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetCoursesAdminItem[],
        {
          /** @example 401 */
          statusCode: number;
          /** @example "Unauthorized" */
          message: string;
          /** @example "Unauthorized" */
          error?: string;
        }
      >({
        path: `/admin/c`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
