import { Clear } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { FieldValues, UseFormSetValue } from "react-hook-form";

interface IProps {
  title: string;
  register: string;
  setValue: UseFormSetValue<FieldValues>;
  values: string[];
}

interface IFeatureItem {
  id: number;
  message: string;
}

const FeatureList = ({
  title,
  register,
  setValue,
  values,
}: IProps): ReactElement => {
  const [features, setFeatures] = useState<IFeatureItem[]>([]);

  const handleAddNextFeature = () => {
    const lastFeature = features.at(-1);
    if (lastFeature) {
      const element: IFeatureItem = {
        id: lastFeature.id + 1,
        message: "",
      };
      setFeatures((prevState) => [...prevState, element]);
    }

    if (!lastFeature) {
      const element: IFeatureItem = {
        id: 0,
        message: "",
      };
      setFeatures([element]);
    }
  };

  const handleOnChange = (
    id: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const element = features.find((f) => f.id === id);

    if (!element) {
      const item: IFeatureItem = {
        id,
        message: e.target.value,
      };
      setFeatures((prevState) => [...prevState, item]);
    }

    if (element) {
      element.message = e.target.value;
      const elements = Array.from(new Set([...features, element]));
      setFeatures(elements);
    }

    const items = features.map((f) => f.message);

    setValue(register, items);
  };

  const handleOnDelete = (id: number) => {
    const filteredFeatures = features.filter((item) => item.id !== id);
    setFeatures(filteredFeatures);
    setValue(
      register,
      filteredFeatures.map((f) => f.message),
    );
  };

  useEffect(() => {
    if (values && values.length) {
      const items: IFeatureItem[] = values.map((item, idx) => ({
        id: idx,
        message: item,
      }));
      setFeatures(items);
    }
  }, [values]);

  return (
    <Paper elevation={8}>
      <Box p={2}>
        <Box
          mb={2}
          display='flex'
          alignItems='center'
          justifyContent='space-between'>
          <Typography fontFamily='Playfair Display' variant='h5'>
            {title}
          </Typography>
          <Button
            variant='contained'
            size='small'
            onClick={handleAddNextFeature}>
            Dodaj
          </Button>
        </Box>
        <Box my={2}>
          <Divider />
        </Box>
        <List disablePadding>
          {features.map((item) => (
            <ListItem
              disableGutters
              key={item.id}
              sx={{
                display: "block",
              }}>
              <Box display='flex' gap={2} alignItems='center'>
                <Box flex={1}>
                  <TextField
                    fullWidth
                    size='small'
                    defaultValue={item.message}
                    onChange={(e) => handleOnChange(item.id, e)}
                  />
                </Box>
                <Box>
                  <Button
                    variant='outlined'
                    size='small'
                    onClick={() => handleOnDelete(item.id)}>
                    <Clear />
                  </Button>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );
};

export default FeatureList;
