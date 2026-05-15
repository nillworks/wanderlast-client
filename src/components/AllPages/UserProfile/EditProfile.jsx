'use client';

import { authClient } from '@/lib/auth-client';
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Description,
  FieldError,
} from '@heroui/react';

import { UserPen } from 'lucide-react';

const EditProfile = () => {
  // Update user profile
  const handleUpdateProfile = async event => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const updateData = Object.fromEntries(formData.entries());

    await authClient.updateUser({
      name: updateData.name,
      image: updateData.image,
    });

    event.target.reset();
  };

  return (
    <Modal>
      {/* Open Button */}
      <Button className="mt-8 h-12 w-full rounded-xl bg-cyan-500 px-4 font-semibold text-white transition duration-300 hover:bg-cyan-600">
        Edit Profile
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-lg rounded-3xl overflow-hidden">
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header className="border-b bg-white">
              <Modal.Icon className="bg-cyan-100 text-cyan-600">
                <UserPen className="size-5" />
              </Modal.Icon>

              <div>
                <Modal.Heading>Update Your Profile</Modal.Heading>

                <p className="mt-2 text-sm leading-6 text-muted">
                  Keep your account information updated so your profile stays
                  accurate and personalized.
                </p>
              </div>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="bg-gray-50 p-6">
              <Surface
                variant="default"
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <form
                  onSubmit={handleUpdateProfile}
                  className="flex flex-col gap-5"
                >
                  {/* Name */}
                  <TextField
                    className="w-full"
                    name="name"
                    type="text"
                    isRequired
                    validate={value => {
                      if (value.length < 3) {
                        return 'Name must be at least 3 characters';
                      }

                      return null;
                    }}
                  >
                    <Label>Full Name</Label>

                    <Input placeholder="Enter your full name" />

                    <Description>
                      This name will appear on your public profile.
                    </Description>

                    <FieldError />
                  </TextField>

                  {/* Image URL */}
                  <TextField
                    className="w-full"
                    name="image"
                    type="url"
                    isRequired
                    validate={value => {
                      if (!value.startsWith('http')) {
                        return 'Please enter a valid image URL';
                      }

                      return null;
                    }}
                  >
                    <Label>Profile Image URL</Label>

                    <Input placeholder="https://example.com/profile.jpg" />

                    <Description>
                      Add a profile picture URL to personalize your account.
                    </Description>

                    <FieldError />
                  </TextField>

                  {/* Buttons */}
                  <div className="flex items-center justify-end gap-3 pt-2">
                    <Button
                      slot="close"
                      variant="secondary"
                      className="h-11 px-5"
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      className="h-11 bg-cyan-500 px-5 text-white hover:bg-cyan-600"
                    >
                      Save Changes
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

export default EditProfile;
