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
  price?: number | string;
  salePrice?: number | string;
  whatYouLearn?: string[];
  courseIncludes?: string[];
  description?: string;
  shortDescription?: string;
  status?: "DRAFT" | "PUBLISHED";
  featured?: boolean;
  youtubePreview?: string;
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

export interface NewLessonDto {
  /** @minLength 3 */
  title: string;
  /** @minLength 16 */
  description: string;
  course: string;
  topic: string;
  order: number;
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
  billing: object;
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
  companyName: string;
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
  /** @format date-time */
  paidAt: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
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

export interface CreateSessionDto {
  /** Courses ID */
  courses: string[];
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
  country: string;
  postCode: string;
}

export interface SimplyUserCurses {
  course: string;
  /** @format date-time */
  availableUntil: string;
}

export interface GetMeResponsesDto {
  _id: string;
  email: string;
  billing: SimplyBillingResponseDto;
  watchedLessons: string[];
  courses: SimplyUserCurses[];
}

export interface UserOrderListItem {
  _id: string;
  status: string;
  /** @format date-time */
  paidAt: string;
  orderId: string;
  total: number;
  totalTax: number;
  totalSum: number;
}

export type OrderBilling = object;

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

export type ActivateCourseDto = object;

export type CreateOrderDto = object;

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(
      typeof value === "number" ? value : `${value}`,
    )}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${
        queryString ? `?${queryString}` : ""
      }`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal: cancelToken
          ? this.createAbortSignal(cancelToken)
          : requestParams.signal,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
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
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
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
    coursesControllerCreateCourse: (
      data: NewCourseDto,
      params: RequestParams = {},
    ) =>
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
      this.request<AdminGetCoursesResponseDto | GetCoursesListResponseDto, any>(
        {
          path: `/courses`,
          method: "GET",
          format: "json",
          ...params,
        },
      ),

    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerUpdateCourse
     * @summary Update course
     * @request PATCH:/courses/{id}
     */
    coursesControllerUpdateCourse: (
      id: string,
      data: UpdateCourseDto,
      params: RequestParams = {},
    ) =>
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
    coursesControllerGetCourseLessons: (
      id: string,
      params: RequestParams = {},
    ) =>
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
    coursesControllerGetCourseTopics: (
      id: string,
      params: RequestParams = {},
    ) =>
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
    lessonsControllerCreateLesson: (
      data: NewLessonDto,
      params: RequestParams = {},
    ) =>
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
    lessonsControllerUpdateLesson: (
      id: string,
      data: UpdateLessonDto,
      params: RequestParams = {},
    ) =>
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
    lessonsControllerSetWatchedLesson: (
      id: string,
      params: RequestParams = {},
    ) =>
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
    topicsControllerUpdateTopic: (
      id: string,
      data: UpdateTopicDto,
      params: RequestParams = {},
    ) =>
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
    ordersControllerGetOrders: (params: RequestParams = {}) =>
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
        path: `/orders`,
        method: "GET",
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
    usersControllerRegister: (
      data: RegisterUserDto,
      params: RequestParams = {},
    ) =>
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
     * @name UsersControllerActivateAccount
     * @summary Activating user account
     * @request GET:/users/activate/{token}
     */
    usersControllerActivateAccount: (
      token: string,
      params: RequestParams = {},
    ) =>
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
    usersControllerResetPasswordRequest: (
      data: ResetPasswordRequestDto,
      params: RequestParams = {},
    ) =>
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
    usersControllerResetPasswordWithToken: (
      token: string,
      data: ResetPasswordDto,
      params: RequestParams = {},
    ) =>
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
  stripe = {
    /**
     * No description
     *
     * @tags Stripe
     * @name StripeControllerSession
     * @summary Create Stripe checkout session and order
     * @request POST:/stripe/create-session
     */
    stripeControllerSession: (
      data: CreateSessionDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/stripe/create-session`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stripe
     * @name StripeControllerWebhook
     * @request POST:/stripe/webhook
     */
    stripeControllerWebhook: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/stripe/webhook`,
        method: "POST",
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
        void,
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
    userControllerGetCourseLesson: (
      id: string,
      course: string,
      params: RequestParams = {},
    ) =>
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
    userControllerUpdateUser: (
      data: UpdateUserDto,
      params: RequestParams = {},
    ) =>
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
    couponsControllerCreate: (
      data: CreateCouponDto,
      params: RequestParams = {},
    ) =>
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
    couponsControllerFindAll: (params: RequestParams = {}) =>
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
    couponsControllerActivate: (
      data: ActivateCourseDto,
      params: RequestParams = {},
    ) =>
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
  };
}
