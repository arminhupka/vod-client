import { Edit } from "@mui/icons-material";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Divider,
  List,
} from "@mui/material";
import { AxiosError } from "axios";
import { ApiError } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import { useMutation } from "react-query";

import {
  AdminGetCourseTopicsItemResponseDto,
  TopicResponseDto,
} from "../../../api/api-types";
import { DeleteTopic } from "../../../api/topics";
import useModalState from "../../../hooks/useModalState";
import NewLessonModal from "../../organism/Modals/NewLessonModal/NewLessonModal";
import {
  StyledButton,
  StyledHeading,
  StyledListItem,
  StyledListText,
} from "./AdminTopicsList.styles";

interface IProps {
  data: AdminGetCourseTopicsItemResponseDto[];
}

const AdminTopicsList = ({ data }: IProps): ReactElement => {
  const router = useRouter();
  const [topicId, setTopicId] = useState<string | null>(null);
  const { isOpen, onClose, onOpen } = useModalState();

  const handleModalClose = () => {
    onClose();
    setTopicId(null);
  };

  const handleModalOpen = (topicId: string) => {
    setTopicId(topicId);
    onOpen();
  };

  const { mutate, isLoading } = useMutation<
    TopicResponseDto,
    AxiosError<ApiError>,
    string
  >(async (id) => await DeleteTopic(id), {
    onSuccess: () => router.replace(router.asPath),
  });

  return (
    <>
      {isLoading && (
        <Backdrop open sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <CircularProgress color='primary' />
        </Backdrop>
      )}
      <NewLessonModal
        topicId={topicId}
        onClose={handleModalClose}
        open={isOpen}
      />
      {data.map((t) => (
        <Accordion key={t._id} square>
          <AccordionSummary>
            <StyledHeading>{t.title}</StyledHeading>
          </AccordionSummary>
          <AccordionDetails>
            <Divider />
            <Box my={2}>
              <List disablePadding>
                {t.lessons.map((l) => (
                  <StyledListItem key={l._id}>
                    <StyledButton type='button'>
                      <Edit fontSize='small' />
                    </StyledButton>
                    <StyledListText>{l.title}</StyledListText>
                  </StyledListItem>
                ))}
              </List>
            </Box>
            <Divider />
          </AccordionDetails>
          <AccordionActions>
            <Box px={1} width='100%' display='flex' gap={2}>
              <Button
                fullWidth
                variant='contained'
                size='small'
                onClick={() => handleModalOpen(t._id)}>
                Dodaj lekcje
              </Button>
              <Button
                fullWidth
                variant='outlined'
                color='error'
                size='small'
                onClick={() => mutate(t._id)}>
                Usuń temat
              </Button>
            </Box>
          </AccordionActions>
        </Accordion>
      ))}
    </>
  );
};

export default AdminTopicsList;
