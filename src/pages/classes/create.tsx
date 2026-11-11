import { CreateView } from "@/components/refine-ui/views/create-view";
import { Breadcrumb } from "@/components/refine-ui/layout/breadcrumb";
import { Button } from "@/components/ui/button";
import { useBack } from "@refinedev/core";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { classSchema } from "@/lib/schema";
import { useForm } from "@refinedev/react-hook-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import UploadWidget from "@/components/upload-widget";

const ClassesCreate = () => {
  const back = useBack();

  const form = useForm({
    resolver: zodResolver(classSchema),
    refineCoreProps: {
      resource: "classes",
      action: "create",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    control,
  } = form;

  const onSubmit = (values: z.infer<typeof classSchema>) => {
    try {
      console.log(values);
    } catch (e) {
      console.log("Error creating new classes", e);
    }
  };
  const setBannerImage = (file: any, field: any) => {
    if (file) {
      field.onChange(file.url);
      form.setValue("bannerCldPubId", file.publicId, {
        shouldValidate: true,
        shouldDirty: true,
      });
    } else {
      field.onChange("");
      form.setValue("bannerCldPubId", "", {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  };
  const teachers = [
    {
      id: "1",
      name: "John Doe",
    },
    {
      id: "2",
      name: "Jane Smith",
    },
    {
      id: "3",
      name: "Michael Brown",
    },
    {
      id: "4",
      name: "Emily Davis",
    },
    {
      id: "5",
      name: "David Wilson",
    },
    {
      id: "6",
      name: "Sarah Johnson",
    },
  ];

  const subjects = [
    {
      id: "1",
      name: "Computer Science",
      code: "CS",
    },
    {
      id: "2",
      name: "Mathematics",
      code: "MATH",
    },
    {
      id: "3",
      name: "Physics",
      code: "PHY",
    },
    {
      id: "4",
      name: "Chemistry",
      code: "CHEM",
    },
    {
      id: "5",
      name: "Electrical Engineering",
      code: "EE",
    },
    {
      id: "6",
      name: "Mechanical Engineering",
      code: "ME",
    },
  ];
  const bannerPublicId = form.watch("bannerCldPubId");
  return (
    <CreateView className="class-view">
      <Breadcrumb />
      <h1 className="page-title">Create a Class</h1>
      <div className="intro-row">
        <p>Provide the required information below to add a class.</p>
        <Button onClick={back}>Go Back</Button>
      </div>
      <Separator />
      <div className="my-4 flex items-center">
        <Card className="class-form-card">
          <CardHeader className="relative z-10">
            <CardTitle className="textt-2xl pb-0 font-bold">
              Fill out the form
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="mt-7">
            <form
              id="form-rhf-demo"
              className="space-y-5"
              onSubmit={handleSubmit(() => onSubmit)}
            >
              <Controller
                name="bannerUrl"
                control={control}
                render={({ field }) => (
                  <Field>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Banner Image<span className="text-orange-600">*</span>
                    </FieldLabel>
                    <UploadWidget
                      value={
                        field.value
                          ? { url: field.value, publicId: bannerPublicId ?? "" }
                          : null
                      }
                      onChange={(file: any) =>
                        setBannerImage(file, field)
                      }
                    />
                    {errors.bannerCldPubId && !errors.bannerUrl && (
                      <p className="text-destructive text-sm">
                        {errors.bannerCldPubId.message?.toString()}
                      </p>
                    )}
                  </Field>
                )}
              />
              <FieldGroup>
                <Controller
                  name="name"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-demo-title">
                        Class Name<span className="text-orange-600">*</span>
                      </FieldLabel>
                      <Input
                        {...field}
                        id="form-rhf-demo-title"
                        aria-invalid={fieldState.invalid}
                        placeholder="Introductio to Biology - Section A"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
              <FieldGroup className="grid sm:grid-cols-2 gap-4">
                <Controller
                  name="subjectId"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-demo-title">
                        Subject<span className="text-orange-600">*</span>
                      </FieldLabel>
                      <Select
                        onValueChange={(value) => field.onChange(Number(value))}
                        value={field?.value?.toString()}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a Subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((subject) => (
                            <SelectItem
                              value={subject?.id?.toString()}
                              key={subject.id}
                            >
                              {subject.name} ({subject.code})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="teacherId"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-demo-title">
                        Teacher<span className="text-orange-600">*</span>
                      </FieldLabel>
                      <Select
                        onValueChange={(value) => field.onChange(Number(value))}
                        value={field?.value?.toString()}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a Teacher" />
                        </SelectTrigger>
                        <SelectContent>
                          {teachers.map((teacher) => (
                            <SelectItem
                              value={teacher?.id?.toString()}
                              key={teacher.id}
                            >
                              {teacher.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="capacity"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-demo-title">
                        Subject<span className="text-orange-600">*</span>
                      </FieldLabel>
                      <Input
                        type="number"
                        placeholder="30"
                        onChange={(e) => {
                          const value = e.target.value;
                          field.onChange(value ? Number(value) : undefined);
                        }}
                        value={(field.value as number | undefined) ?? ""}
                        name={field.name}
                        ref={field.ref}
                        onBlur={field.onBlur}
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="status"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-demo-title">
                        Subject<span className="text-orange-600">*</span>
                      </FieldLabel>
                      <Select
                        onValueChange={(value) => field.onChange(Number(value))}
                        value={field?.value?.toString()}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                      </Select>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
              <FieldGroup>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <Field>
                      <FieldLabel htmlFor="form-rhf-demo-title">
                        Description
                      </FieldLabel>
                      <Textarea
                        className="w-full"
                        placeholder="Brief description about the class"
                        {...field}
                      />
                    </Field>
                  )}
                />
              </FieldGroup>
              <Separator />

              <Button type="submit">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </CreateView>
  );
};

export default ClassesCreate;
