'use client';

import { Envelope } from '@gravity-ui/icons';
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Select,
  Surface,
  TextArea,
  TextField,
} from '@heroui/react';
import { CalendarDays, DollarSign, Edit, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';

const categories = [
  'Beach',
  'Mountain',
  'City',
  'Adventure',
  'Cultural',
  'Luxury',
];

const EditModalPage = ({ existingData, updateFeaturedData }) => {
  const router = useRouter();
  const isPending = false;

  const {
    _id,
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
  } = existingData;

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const fromObject = Object.fromEntries(formData.entries());
    const res = await updateFeaturedData(_id, fromObject);

    if (res.modifiedCount > 0) {
      router.push('/destinations');
    }
    e.target.reset();
  };
  return (
    <Modal>
      {/* Trigger Button */}
      <Button className="group cursor-pointer rounded-2xl border border-cyan-500 bg-cyan-500 px-5 py-2 text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-600">
        <Edit
          size={16}
          className="mr-2 transition-transform duration-300 group-hover:rotate-12"
        />
        Edit Package
      </Button>

      <Modal.Backdrop className="bg-black/40 backdrop-blur-sm">
        <Modal.Container placement="center">
          <Modal.Dialog className="max-h-[95vh] overflow-y-auto rounded-3xl border border-white/20 bg-white shadow-2xl sm:max-w-3xl">
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header className="border-b border-gray-100 px-8 py-6">
              <Modal.Icon className="bg-cyan-100 text-cyan-600">
                <Envelope className="size-5" />
              </Modal.Icon>

              <div>
                <Modal.Heading className="text-2xl font-bold text-gray-800">
                  Update Travel Package
                </Modal.Heading>

                <p className="mt-1 text-sm text-gray-500">
                  Customize your destination details and travel information.
                </p>
              </div>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="p-6 md:p-8">
              <Surface
                variant="default"
                className="rounded-3xl border border-gray-100 bg-white shadow-sm"
              >
                <form onSubmit={handleSubmit} className="space-y-8 p-6 md:p-10">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Destination Name */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={destinationName}
                        name="destinationName"
                        isRequired
                      >
                        <Label className="mb-2 font-semibold text-gray-700">
                          Destination Name
                        </Label>

                        <Input
                          placeholder="Bali Paradise"
                          className="rounded-2xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Country */}
                    <TextField name="country" defaultValue={country} isRequired>
                      <Label
                        defaultValue={country}
                        className="mb-2 font-semibold text-gray-700"
                      >
                        Country
                      </Label>

                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 z-10 size-4 -translate-y-1/2 text-gray-400" />

                        <Input
                          placeholder="Indonesia"
                          className="rounded-2xl pl-10"
                        />
                      </div>

                      <FieldError />
                    </TextField>

                    {/* Category */}
                    <div>
                      <Select
                        defaultValue={category}
                        name="category"
                        isRequired
                        placeholder="Select category"
                        className="w-full"
                      >
                        <Label className="mb-2 font-semibold text-gray-700">
                          Category
                        </Label>

                        <Select.Trigger className="rounded-2xl border border-gray-200">
                          <Select.Value textValue={category} />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            {categories.map(category => (
                              <ListBox.Item key={category} id={category}>
                                {category}
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            ))}
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Price */}
                    <TextField
                      defaultValue={price}
                      name="price"
                      type="number"
                      isRequired
                    >
                      <Label className="mb-2 font-semibold text-gray-700">
                        Price (USD)
                      </Label>

                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 z-10 size-4 -translate-y-1/2 text-gray-400" />

                        <Input
                          type="number"
                          placeholder="1299"
                          className="rounded-2xl pl-10"
                        />
                      </div>

                      <FieldError />
                    </TextField>

                    {/* Duration */}
                    <TextField
                      defaultValue={duration}
                      name="duration"
                      isRequired
                    >
                      <Label className="mb-2 font-semibold text-gray-700">
                        Duration
                      </Label>

                      <Input
                        placeholder="7 Days / 6 Nights"
                        className="rounded-2xl"
                      />

                      <FieldError />
                    </TextField>

                    {/* Departure Date */}
                    <TextField
                      defaultValue={departureDate}
                      name="departureDate"
                      type="date"
                      isRequired
                    >
                      <Label className="mb-2 font-semibold text-gray-700">
                        Departure Date
                      </Label>

                      <div className="relative">
                        <CalendarDays className="absolute left-3 top-1/2 z-10 size-4 -translate-y-1/2 text-gray-400" />

                        <Input type="date" className="rounded-2xl pl-10" />
                      </div>

                      <FieldError />
                    </TextField>

                    {/* Image URL */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={imageUrl}
                        name="imageUrl"
                        isRequired
                      >
                        <Label className="mb-2 font-semibold text-gray-700">
                          Image URL
                        </Label>

                        <Input
                          type="url"
                          placeholder="https://example.com/bali-paradise.jpg"
                          className="rounded-2xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >
                        <Label className="mb-2 font-semibold text-gray-700">
                          Description
                        </Label>

                        <TextArea
                          placeholder="Describe the travel experience..."
                          className="min-h-[140px] rounded-3xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col-reverse gap-4 pt-4 sm:flex-row sm:justify-end">
                    <Button
                      slot="close"
                      className="rounded-2xl border border-gray-300 bg-white px-6 text-gray-700 hover:bg-gray-100"
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      isLoading={isPending}
                      className="rounded-2xl bg-cyan-500 px-8 text-white shadow-md transition-all duration-300 hover:bg-cyan-600"
                    >
                      {isPending
                        ? 'Updating Package...'
                        : 'Update Travel Package'}
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditModalPage;
