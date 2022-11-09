import { supabase } from "/src/utils/SupabaseClient";
import { uniqueString } from "/src/utils/GenerateString";

export const pdsToStorage = async (file) => {
  if (!file) {
    return {
      status: "error",
      message: "No file selected",
    };
  }

  const FILE_NAME = `${uniqueString(8)}.${file.name.split(".")[1]}`;

  try {
    const { error: uploadError } = await supabase.storage
      .from("pds-raw")
      .upload(FILE_NAME, file);

    if (uploadError) {
      throw uploadError;
    }
  } catch (error) {
    return { status: "error", message: error.message };
  }

  return {
    status: "success",
    data: { file_name: FILE_NAME, default_name: file.name },
  };
};

export const pdsStorageLink = async (file_name) => {
  try {
    const { data, error } = await supabase.storage
      .from("pds-raw")
      .getPublicUrl(file_name);

    if (error) {
      throw error;
    }

    return {
      status: "success",
      data: { file_url: data.publicUrl },
    };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};
